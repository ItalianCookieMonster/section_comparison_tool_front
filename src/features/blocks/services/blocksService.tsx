import { BLOCKS_URLS } from '@/config/apiConfig';
import { Block, BlockUpdate } from '../types/blockTypes';
import api  from '@/interceptors/apiInterceptor';

export const getBockDetail = async (id: number) => {
    try {
        const response = await api.get(BLOCKS_URLS.GET_BLOCKS + id + '/');
        return response.data;
    } catch (error) {
        console.error('Error getting project detail', error);
        throw error;
    }
}

export const getAllBlocks = async () => {
    try {
        const response = await api.get(BLOCKS_URLS.GET_BLOCKS);
        return response.data;
    } catch (error) {
        console.error('Error getting project detail', error);
        throw error;
    }
}


export const createBlock = async (block: Block) => {
    try {
        const response = await api.post(BLOCKS_URLS.GET_BLOCKS, block);
        return response.data;
    } catch (error) {
        console.error('Error creating block', error);
        throw error;
    }
};

export const updateBlock = async (block: BlockUpdate) => {
    try {
        const response = await api.put(BLOCKS_URLS.GET_BLOCKS + block.id + '/', block);
        return response.data;
    } catch (error) {
        console.error('Error updating project', error);
        throw error;
    }
}

export const deleteBlock = async (id: number) => {
    try {
        const response = await api.delete(BLOCKS_URLS.GET_BLOCKS + id + '/');
        return response.data;
    } catch (error) {
        console.error('Error deleting project', error);
        throw error;
    }
}