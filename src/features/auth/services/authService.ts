import axios from 'axios';
import { AUTH_URLS } from '../../../config/apiConfig';

export const login = async (email: string, password: string) => {
    const response = await axios.post(AUTH_URLS.LOGIN, { email, password });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

export const register = async (email: string, password: string) => {
    const response = await axios.post(AUTH_URLS.REGISTER, { email, password });
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('user');
};