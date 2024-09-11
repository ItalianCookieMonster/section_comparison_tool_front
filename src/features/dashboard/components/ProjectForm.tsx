import { FormInputField } from "../../../shared/components/FormInputFields";
import { Form } from "../../../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema, projectInfoInputs, technicalDataInputs } from "../schemas/dashboardSchema";
import { Button } from "../../../ui/button";


type Input = {
    name: string;
    label: string;
    placeholder: string;
}



const ProjectForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const handleSaveProject = (values: z.infer<typeof formSchema>) => {
        console.log("Saving project data:", values);
    };

    const handleAddSection = (values: z.infer<typeof formSchema>) => {
        console.log("Adding section and saving project data:", values);
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSaveProject)}>
                <section>
                    <h3 className="font-bold text-4xl text-center my-10">Project Info</h3>
                    <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-8">
                        {projectInfoInputs.map((input: Input, index) => (
                            <FormInputField
                                key={index}
                                label={input.label}
                                name={input.name}
                                placeholder={input.placeholder}
                                field={form.register(input.name as keyof z.infer<typeof formSchema>)}
                                error={form.formState.errors[input.name as keyof z.infer<typeof formSchema>]?.message}
                            />
                        ))}
                    </div>
                </section>


                <section>
                    <h3 className="font-bold text-4xl text-center my-10">Technical Data</h3>
                    <div className="grid grid-cols-3 grid-rows-4 grid-flow-col gap-8">
                        {technicalDataInputs.map((input: Input, index) => (
                            <FormInputField
                                key={index}
                                label={input.label}
                                name={input.name}
                                placeholder={input.placeholder}
                                field={form.register(input.name as keyof z.infer<typeof formSchema>)}
                                error={form.formState.errors[input.name as keyof z.infer<typeof formSchema>]?.message}
                            />
                        ))}
                    </div>
                </section>

                <div className="flex justify-around my-10">
                    <Button type="button" size="lg" onClick={form.handleSubmit(handleAddSection)}>
                        Add Section
                    </Button>
                    <Button type="submit" size="lg">Save Project Data</Button>
                </div>
            </form>
        </Form>
    )
}
export default ProjectForm