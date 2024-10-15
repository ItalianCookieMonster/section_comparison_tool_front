import { useQuery } from "@tanstack/react-query";
import { getCSById } from "../service/crossSectionsService";

export const useGetCS = (sectionId: number) => {
    const query = useQuery({
        queryKey: ['section', sectionId],
        queryFn: () => getCSById(sectionId),
        enabled: !!sectionId,  
        staleTime: 1000 * 60 * 30,  
    });

    return query;
};