import api  from '@/interceptors/apiInterceptor';
import { USER_URLS } from '@/config/apiConfig';


export const getUser = async () => {
    try {
        const response = await api.get(USER_URLS.GET_USER);
        return response.data;
    } catch (error) {
        console.error('Error getting user detail', error);
        throw error;
    }
}