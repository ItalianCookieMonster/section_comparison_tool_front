import { DASHBOARD_URLS } from '../../../config/apiConfig';
import { Block, BlockUpdate } from '../types/types';
import api  from '../../../shared/interceptors/apiInterceptor';


export const getBockDetail = async (id: number) => {
    try {
        const response = await api.get(DASHBOARD_URLS.BLOCKS + id + '/');
        return response.data;
    } catch (error) {
        console.error('Error getting project detail', error);
        throw error;
    }
}

export const getAllBlocks = async () => {
    try {
        const response = await api.get(DASHBOARD_URLS.BLOCKS);
        return response.data;
    } catch (error) {
        console.error('Error getting project detail', error);
        throw error;
    }
}


export const createBlock = async (block: Block) => {
    try {
        const response = await api.post(DASHBOARD_URLS.BLOCKS, block);
        return response.data;
    } catch (error) {
        console.error('Error creating block', error);
        throw error;
    }
};

export const updateBlock = async (block: BlockUpdate) => {
    try {
        const response = await api.put(DASHBOARD_URLS.BLOCKS + block.id + '/', block);
        return response.data;
    } catch (error) {
        console.error('Error updating project', error);
        throw error;
    }
}

export const deleteBlock = async (id: number) => {
    try {
        const response = await api.delete(DASHBOARD_URLS.BLOCKS + id + '/');
        return response.data;
    } catch (error) {
        console.error('Error deleting project', error);
        throw error;
    }
}