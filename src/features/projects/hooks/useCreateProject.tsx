import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProjectResponse } from "../types/projectType";
import { formSchema } from "../schemas/projectSchema";
import { createProject } from "../services/projectService";
import { z } from "zod";
import { useToast } from "@/hooks/useToast";
import { useSectionsContext } from "@/hooks/useSectionsContext";

export const useCreateProject = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const { setSectionCount} = useSectionsContext();


    return useMutation<ProjectResponse, Error, z.infer<typeof formSchema>>({
        mutationKey: ['project'],
        mutationFn: (newProject: z.infer<typeof formSchema>) => createProject(newProject),
        onSuccess: (data) => {
            setSectionCount(data.sections?.length || 0);
            const project_id = data.id.toString();
            localStorage.setItem('project_id', project_id);

            queryClient.invalidateQueries({ queryKey: ["projects"] }); 
            queryClient.invalidateQueries({ queryKey: ["project", project_id] }); 


            toast({
                title: "Project created successfully",
                variant: "success",
                duration: 3000,
            });
        },
        onError: (error) => {
            console.error("Error creating project:", error);
            toast({
                title: "Error creating project",
                description: error.message,
                variant: "destructive",
                duration: 3000,
            });
        }
    });
};

