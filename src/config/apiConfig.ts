// src/config/apiConfig.ts
const API_BASE_URL = 'http://localhost:8000/api/v1';

export const AUTH_URLS = {
    LOGIN: `${API_BASE_URL}/auth/jwt/create/`,
    REGISTER: `${API_BASE_URL}/auth/users/`,
    REFRESH: `${API_BASE_URL}/auth/jwt/refresh/`,
    USER: `${API_BASE_URL}/auth/users/me/`,
};

export const ACCOUNT_URLS = {
    PROFILE: `${API_BASE_URL}/accounts/accounts/`,
};