import { useQuery } from "@tanstack/react-query";
import { getProjectsCrossSections}  from "../../projects/services/projectService";

export const useGetProjectCrossSection = () => {
    const query = useQuery({
        queryKey: ['project_cross_sections', projectId],
        queryFn: () => getProjectsCrossSections(projectId),
        enabled: !!projectId,  
        staleTime: 1000 * 60 * 30,  
    });

    return query;
};