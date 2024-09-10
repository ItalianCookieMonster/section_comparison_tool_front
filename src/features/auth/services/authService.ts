import axios from 'axios';
import { ACCOUNT_URLS, AUTH_URLS } from '../../../config/apiConfig';
import { User, UserLogin, Account } from '../../../features/auth/types/types';


export const login = async (user: UserLogin) => {
    try {
        const response = await axios.post(AUTH_URLS.LOGIN, user);
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (err) {
        console.log(err);
    }
    
};

export const registerUser = async (user: User) => {
    try {
        const response = await axios.post(AUTH_URLS.REGISTER, user);
        return response;
    } catch (error) {
        console.error('Error registering user', error);
        throw error;
    }
};

export const createAccount = async (account: Account) => {
    try {
        const response = await axios.post(ACCOUNT_URLS.PROFILE, account);
        return response.data;
    } catch (error) {
        console.error('Error creating account', error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('user');
};