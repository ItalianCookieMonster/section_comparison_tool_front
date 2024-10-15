import { useToast } from "@/hooks/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateSection } from "../types/crossSectionTypes";
import { createCS } from "../service/crossSectionsService";

export const useCreateCS = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();

    return useMutation<CreateSection, Error, CreateSection>({
        mutationKey: ['cross_section'],
        mutationFn: (data: CreateSection) => createCS(data),
        onSuccess: (data) => {            
            toast({
                title: "Cross section created successfully",
                variant: "success",
                duration: 3000,
            });
            console.log("Response create section: ", data);
            queryClient.invalidateQueries({ queryKey: ["project"] });

        },
        onError: (error) => {
            console.error("Error creating cross section:", error);
            toast({
                title: "Error creating cross section",
                description: error.message,
                variant: "destructive",
                duration: 3000,
            });
        }
    });
};