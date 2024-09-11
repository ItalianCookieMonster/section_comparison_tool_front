import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod"
import { Form } from "../../../ui/form";
import { Block, Input, BlockUpdate } from "../types/types"
import { blockFormInputs, blockSchema } from "../schemas/blockSchema"
import { FormInputField } from "../../../shared/components/FormInputFields"
import { Button } from "../../../ui/button";


const BlockForm = ({
    blockDetail,
    onSubmit,
}: {
    blockDetail?: Block;
    onSubmit: (data: Block | BlockUpdate) => Promise<void>;
}) => {

    const form = useForm<z.infer<typeof blockSchema>>({
        resolver: zodResolver(blockSchema),
        defaultValues: blockDetail ? {
            name: blockDetail.name,
            vol_per_block: blockDetail.vol_per_block,
            width: blockDetail.width,
            height: blockDetail.height,
            depth: blockDetail.depth,
            face_area: blockDetail.face_area,
            image: blockDetail.image || "", 
        } : {} 
    });

    const handleSubmit = (data: z.infer<typeof blockSchema>) => {
        onSubmit(blockDetail ? { ...blockDetail, ...data } : data);
    };

    return (
        <Form {...form}>
            <form className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-8" onSubmit={form.handleSubmit(handleSubmit)}>

                {blockFormInputs.map((input: Input, index) => (
                    <FormInputField
                        key={index}
                        label={input.label}
                        name={input.name}
                        placeholder={input.placeholder}
                        field={form.register(input.name as keyof z.infer<typeof blockSchema>)}
                        error={form.formState.errors[input.name as keyof z.infer<typeof blockSchema>]?.message}
                        type={input.type}
                    />
                ))}

            <Button size="sm" type="submit">Save</Button>
            </form>
        </Form>
    )
}
export default BlockForm
