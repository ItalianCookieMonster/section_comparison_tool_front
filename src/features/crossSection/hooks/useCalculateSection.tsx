import { useToast } from "@/hooks/useToast";
import { useMutation } from "@tanstack/react-query";
import { CalculateSectionResponse } from "../types/crossSectionTypes";
import { calculatSection } from "../service/crossSectionsService";

export const useCalculateSection = () => {
    const { toast } = useToast();

    return useMutation<CalculateSectionResponse, Error, {sectionId: number}>({
        mutationKey: ['calculate_section'],
        mutationFn: ({sectionId}) => calculatSection(sectionId),
        onSuccess: (data) => {            
            toast({
                title: "Calculation completed successfully",
                description: "The section metrics have been calculated.",
                variant: "success",
            });
            console.log("Calculated metrics successfully:", data);

        },
        onError: (error) => {
            toast({
                title: "Error calculating metrics",
                description: error.message,
                variant: "destructive",
            });
            console.error("Error calculating metrics:", error);
        }
    });
};