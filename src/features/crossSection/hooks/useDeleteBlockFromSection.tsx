import { useToast } from "@/hooks/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlockFromSection } from "../service/crossSectionsService";

export const useDeleteBlockFromSection = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();


    return useMutation<void, Error, { sectionId: number, blockId: number}>({
        mutationKey: ['cross_section'],
        mutationFn:  async ({ sectionId, blockId }) => {
            await deleteBlockFromSection(sectionId, blockId);
        },
        onSuccess: () => {            
            toast({
                title: "Blocks deleted successfully",
                variant: "success",
                duration: 3000,
            });
            
            queryClient.invalidateQueries({ queryKey: ["blocks_per_section"] });
            
        },
        onError: (error) => {
            console.error("Error deleting section block:", error);
            toast({
                title: "Error deleting section block",
                description: error.message,
                variant: "destructive",
                duration: 3000,
            });
        }
    });
};