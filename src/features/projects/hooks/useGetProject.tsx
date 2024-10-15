import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../services/projectService";

export const useGetProject = (projectId?: string) => {
    const query = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => getProjectById(projectId as string),
        enabled: !!projectId,  
        staleTime: 1000 * 60 * 30,  
    });

    return query;
};