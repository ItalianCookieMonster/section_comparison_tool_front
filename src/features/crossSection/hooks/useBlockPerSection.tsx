import { useQuery } from "@tanstack/react-query";
import { getBlockPerSection } from "../service/crossSectionsService";

export const useGetBlockPerSection = (sectionId: number) => {
    const query = useQuery({
        queryKey: ['blocks_per_section', sectionId],
        queryFn: () => getBlockPerSection(sectionId),
        enabled: !!sectionId,  
        staleTime: 1000 * 60 * 30,  
    });

    return query;
};