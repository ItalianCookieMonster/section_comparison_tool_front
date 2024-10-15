export const API_BASE_URL = 'http://localhost:8000/api/v1';


export const AUTH_URLS = {
    LOGIN: `${API_BASE_URL}/auth/jwt/create/`,
    REGISTER: `${API_BASE_URL}/auth/users/`,
    REFRESH: `${API_BASE_URL}/auth/jwt/refresh/`,
    USER: `${API_BASE_URL}/auth/users/me/`,
    LOGOUT: `${API_BASE_URL}/auth/jwt/logout/`,
};

export const USER_URLS = {
    GET_USER: `${API_BASE_URL}/auth/users/me`,
}

export const PROJECT_URLS = {
    CREATE_PROJECTS: `${API_BASE_URL}/projects/`,
    GET_PROJECTS: `${API_BASE_URL}/projects/`,
    UPDATE_PROJECTS: `${API_BASE_URL}/projects/`,
    DELETE_PROJECTS: `${API_BASE_URL}/projects/`,
    GET_PROJECT_CROSS_SECTIONS: `${API_BASE_URL}/projects/<int:pk>/sections/`,
    GET_PROJECT_DETAIL: `${API_BASE_URL}/projects/<int:pk>/`,
}

export const CROSS_SECTIONS_URLS = {
    GET_CROSS_SECTIONS_RELATED_PROJECTS: `${API_BASE_URL}/projects/<int:pk>/sections/`,
    CREATE_CROSS_SECTION: `${API_BASE_URL}/sections/`,
    GET_CROSS_SECTION_BY_ID: `${API_BASE_URL}/sections/<int:pk>/`, 
    CALCULATE_CROSS_SECTIONS: (sectionId: number) => `${API_BASE_URL}/sections/${sectionId}/calculate-all/`,

    GET_BLOCKS_PER_SECTION: `${API_BASE_URL}/sectionblocks/?section_id=`,
    POST_BLOCK_PER_SECTION: `${API_BASE_URL}/sectionblocks/`,
    DELETE_BLOCK_PER_SECTION: `${API_BASE_URL}/sectionblocks/`,

}




export const DASHBOARD_URLS = {
    SECTIONS: `${API_BASE_URL}/sections/`,
    
}


export const BLOCKS_URLS = {
    GET_BLOCKS: `${API_BASE_URL}/blocks/`,
}

