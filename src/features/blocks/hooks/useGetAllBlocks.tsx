import { useQuery } from "@tanstack/react-query";
import { getAllBlocks } from "../services/blocksService";

export const useGetAllBlocks = () => {
    const query = useQuery({
        queryKey: ['blocks'],
        queryFn: () => getAllBlocks(),
        staleTime: 1000 * 60 * 30,  
    });

    return query;
};