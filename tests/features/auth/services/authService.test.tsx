import { login } from '../:./../../../../src/features/auth/services/authService';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import api from '../../../../src/interceptors/apiInterceptor';

vi.mock('axios');
vi.mock('../../../interceptors/apiInterceptor', () => ({
    post: vi.fn()
}));

describe.skip('authService', () => {

    beforeEach(() => {
        
        vi.clearAllMocks();
        global.localStorage.setItem = vi.fn();
        global.localStorage.getItem = vi.fn();
        global.localStorage.removeItem = vi.fn();
    });

    it('should login a user and store tokens', async () => {
        const mockUser = { username: 'test', password: 'password' };
        const mockResponse = { data: { access: 'accessToken', refresh: 'refreshToken' } };

        (api.post as vi.Mock).mockResolvedValueOnce(mockResponse);

        const result = await login(mockUser);

        // Assert tokens are set in localStorage
        expect(localStorage.setItem).toHaveBeenCalledWith('access', 'accessToken');
        expect(localStorage.setItem).toHaveBeenCalledWith('refresh', 'refreshToken');
        expect(result).toEqual(mockResponse.data);
    });

    it('should throw an error if login fails', async () => {
        const mockUser = { username: 'test', password: 'password' };
        (api.post as vi.Mock).mockRejectedValueOnce(new Error('Login failed'));

        await expect(login(mockUser)).rejects.toThrow('Login failed');
    });
});