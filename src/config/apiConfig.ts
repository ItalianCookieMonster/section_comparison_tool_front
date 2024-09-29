export const API_BASE_URL = 'http://localhost:8000/api/v1';


export const AUTH_URLS = {
    LOGIN: `${API_BASE_URL}/auth/jwt/create/`,
    REGISTER: `${API_BASE_URL}/auth/users/`,
    REFRESH: `${API_BASE_URL}/auth/jwt/refresh/`,
    USER: `${API_BASE_URL}/auth/users/me/`,
    LOGOUT: `${API_BASE_URL}/auth/jwt/logout/`,
};

export const ACCOUNT_URLS = {
    PROFILE: `${API_BASE_URL}/accounts/accounts/`,
};

export const DASHBOARD_URLS = {
    PROJECTS: `${API_BASE_URL}/projects/`,
    SECTIONS: `${API_BASE_URL}/sections/`,
    BLOCKS: `${API_BASE_URL}/blocks/`,
}

