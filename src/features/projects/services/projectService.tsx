import { PROJECT_URLS  } from '@/config/apiConfig';
import { Project } from '../types/projectType';
import api  from '@/interceptors/apiInterceptor';



export const getProjectById = async (id: string) => {
    try {
        const response = await api.get(PROJECT_URLS.GET_PROJECTS + id);
        return response.data;
    } catch (error) {
        console.error('Error getting project detail', error);
        throw error;
    }
}


export const getAllProjects = async () => {
    try {
        const response = await api.get(PROJECT_URLS.GET_PROJECTS);
        return response.data;
    } catch (error) {
        console.error('Error getting projects', error);
        throw error;
    }
}


export const createProject = async (project: Project) => {
    try {
        const response = await api.post(PROJECT_URLS .CREATE_PROJECTS, project);
        console.log("response in create project: ", response)
        return response.data;
    } catch (error) {
        console.error('Error creating project', error);
        throw error;
    }
};


