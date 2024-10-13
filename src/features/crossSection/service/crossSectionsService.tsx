import { PROJECT_URLS } from "@/config/apiConfig";
import api from "@/interceptors/apiInterceptor";

export const getProjectsCrossSections = async () => {
    try {
        const response = await api.get(PROJECT_URLS.GET_PROJECT_CROSS_SECTIONS);
        return response.data;
    } catch (error) {
        console.error('Error getting projects', error);
        throw error;
    }
}
