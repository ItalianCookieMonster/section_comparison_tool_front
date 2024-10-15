import { CROSS_SECTIONS_URLS, PROJECT_URLS } from "@/config/apiConfig";
import api from "@/interceptors/apiInterceptor";
import { BlockPerSection, CreateSection } from "../types/crossSectionTypes";

export const getProjectsCrossSections = async () => {
    try {
        const response = await api.get(PROJECT_URLS.GET_PROJECT_CROSS_SECTIONS);
        return response.data;
    } catch (error) {
        console.error('Error getting projects', error);
        throw error;
    }
}


export const getBlockPerSection = async (sectionId: number) => {
    try {
        const response = await api.get(`${CROSS_SECTIONS_URLS.GET_BLOCKS_PER_SECTION}${sectionId}`);
        return response.data;
    } catch (error) {
        console.error('Error getting projects', error);
        throw error;
    }
}

export const createBlockPerSection = async (data: BlockPerSection) => {
    try {
        const response = await api.post(CROSS_SECTIONS_URLS.POST_BLOCK_PER_SECTION, data);
        return response.data;
    } catch (error) {
        console.error('Error updating block per section', error);
        throw error;
    }
}


export const deleteBlockFromSection = async (sectionId: number, blockId: number) => {
    const url = `${CROSS_SECTIONS_URLS.DELETE_BLOCK_PER_SECTION}${sectionId}/blocks/${blockId}/`;

    try {
        const response = await api.delete(url);  
        return response
    } catch (error) {
        console.error("Error deleting section block", error);
    }
};


export const calculatSection = async (sessionId: number) => {
    console.log("sessionId in service: ", sessionId)
    try {
        const response = await api.post(CROSS_SECTIONS_URLS.CALCULATE_CROSS_SECTIONS(sessionId));
        return response.data;
    } catch (error) {
        console.error('Error deleting project', error);
        throw error;
    }
}



export const createCS = async (data: CreateSection) => {
    try {
        const response = await api.post(CROSS_SECTIONS_URLS.CREATE_CROSS_SECTION, data);
        return response.data;
    } catch (error) {
        console.error('Error deleting project', error);
        throw error;
    }
}


export const getCSById = async (id: number) => {
    try {
        const response = await api.get(`${CROSS_SECTIONS_URLS.GET_CROSS_SECTION_BY_ID.replace('<int:pk>', id.toString())}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting project', error);
        throw error;
    }
}