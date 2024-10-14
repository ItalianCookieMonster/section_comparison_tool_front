import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/useToast";
import { BlockPerSection } from "../types/crossSectionTypes";
import { createBlockPerSection } from "../service/crossSectionsService";

export const useCreateBlockPerSection = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();


    return useMutation<
        BlockPerSection,  // The type of the data to be posted
        Error,  // The error type
       BlockPerSection // Variables to pass (sessionId + data)
    >({
        mutationKey: ['blocks_per_section'],
        mutationFn: (data) => createBlockPerSection(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blocks_per_section"] });
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

