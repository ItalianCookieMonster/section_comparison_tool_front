import axios from 'axios';
import { AUTH_URLS } from '@/config/apiConfig';
import { UserLogin, UserWithAccount } from '../../../features/auth/types/types';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../config/constants';
import api  from '../../../interceptors/apiInterceptor';



export const login = async (user: UserLogin) => {
    try {
        const response = await api.post(AUTH_URLS.LOGIN, user);
        if (response.data) {
            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        }
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
    
};

export const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
        const response = await api.post(AUTH_URLS.REFRESH, { refresh: refreshToken });
        if (response.status === 200) {
            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            return response.data.access;
        }
        return null;
    } catch (err) {
        console.error('Error refreshing token', err);
        throw err;
    }
};




export const registerUser = async (user: UserWithAccount) => {
    try {
        const response = await axios.post(AUTH_URLS.REGISTER, user);
        return response;
    } catch (error) {
        console.error('Error registering user', error);
        throw error;
    }
};


export const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
};