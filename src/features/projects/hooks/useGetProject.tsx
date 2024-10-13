import { useQuery } from "@tanstack/react-query";
import { getProjectById}  from "../services/projectService";

export const useGetProject = () => {
    const projectId = localStorage.getItem('project_id');  

    if (!projectId) {
        throw new Error('Project ID not found');
    }

    const query = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => getProjectById(projectId),
        enabled: !!projectId,  
        staleTime: 1000 * 60 * 30,  
    });

    return query;
};