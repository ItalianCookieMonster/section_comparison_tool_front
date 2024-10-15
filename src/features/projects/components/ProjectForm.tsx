import { FormInputField } from "../../../components/FormInputFields";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema, projectInfoInputs, technicalDataInputs } from "../schemas/projectSchema";
import { Button } from "@/components/ui/button";
import { ProjectResponse } from "../types/projectType";
import { useQueryClient } from "@tanstack/react-query";


type Input = {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
}

type ProjectFormProps = {
    onSubmit: (data: z.infer<typeof formSchema>) => Promise<ProjectResponse>;  
};

const ProjectForm = ({ onSubmit }: ProjectFormProps) => {

    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });



    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        await onSubmit(data);
        queryClient.invalidateQueries({ queryKey: ["project"] });
        console.log("data: ", data);
    };


    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="px-">
            <section>
                <h3 className="font-bold text-4xl text-center my-5">Project Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center items-center">
                    {projectInfoInputs.map((input: Input, index) => (
                        <FormInputField
                            key={index}
                            label={input.label}
                            name={input.name}
                            placeholder={input.placeholder}
                            field={form.register(input.name as keyof z.infer<typeof formSchema>)}
                            error={form.formState.errors[input.name as keyof z.infer<typeof formSchema>]?.message}
                            type={input.type}
                        />
                    ))}
                </div>
            </section>
    
            <section>
                <h3 className="font-bold text-4xl text-center my-5">Technical Data</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center items-center">
                    {technicalDataInputs.map((input: Input, index) => (
                        <FormInputField
                            key={index}
                            label={input.label}
                            name={input.name}
                            placeholder={input.placeholder}
                            field={form.register(input.name as keyof z.infer<typeof formSchema>)}
                            error={form.formState.errors[input.name as keyof z.infer<typeof formSchema>]?.message}
                            type={input.type}
                        />
                    ))}
                </div>
            </section>
    
            <div className="flex flex-col md:flex-row justify-around my-10 space-y-4 md:space-y-0">
                <Button type="submit" size="lg">
                    Save Project 
                </Button>
            </div>
        </form>
    </Form>
    )
}
export default ProjectForm