import { FormInputField } from "../../../components/FormInputFields";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { z } from "zod";
import { formSchema, projectInfoInputs, technicalDataInputs } from "../schemas/projectSchema";
import { Button } from "@/components/ui/button";
import { ProjectResponse } from "../types/projectType";


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

    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const handleSumbmitAndAddSection = async (data: z.infer<typeof formSchema>) => {
        const response: ProjectResponse = await onSubmit(data); 
    
        if (response) {
            navigate(`/section/${response.new_section_id}`);  
        }
    }

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Project added", data);
        onSubmit(data);
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <section>
                    <h3 className="font-bold text-4xl text-center my-5">Project Info</h3>
                    <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-4">
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
                    <div className="grid grid-cols-3 grid-rows-4 grid-flow-col gap-4">
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

                <div className="flex justify-around my-10">
                    <Button type="button" size="lg" onClick={form.handleSubmit( handleSumbmitAndAddSection)}>
                        Add Section
                    </Button>
                    <Button type="submit" size="lg">Save Project Data</Button>
                </div>
            </form>
        </Form>
    )
}
export default ProjectForm