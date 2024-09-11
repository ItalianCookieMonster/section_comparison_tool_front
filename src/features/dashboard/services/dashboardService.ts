import { DASHBOARD_URLS } from '../../../config/apiConfig';
import { Project } from '../types/types';
import api  from '../../../shared/interceptors/apiInterceptor';



export const getProjectDetail = async (id: number) => {
    try {
        const response = await api.get(DASHBOARD_URLS.PROJECTS + id + '/');
        return response.data;
    } catch (error) {
        console.error('Error getting project detail', error);
        throw error;
    }
}


export const createProject = async (project: Project) => {
    try {
        const response = await api.post(DASHBOARD_URLS.PROJECTS, project);
        return response.data;
    } catch (error) {
        console.error('Error creating project', error);
        throw error;
    }
};

