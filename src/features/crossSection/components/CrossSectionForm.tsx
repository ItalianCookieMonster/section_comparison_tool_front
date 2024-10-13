// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Button } from "@/components/ui/button"
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// // import { FormInputField } from "@/components/FormInputFields"
// // import FormSelectInput from "@/components/FormSelectInput"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"

// const formSchema = z.object({
//     name: z.string().optional(),
//     block_name: z.string().optional(),
//     quantity: z.string().transform(val => parseFloat(val)).optional(),
// })

// export function CrossSectionForm() {

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//     })

//     const onSubmit = (data: z.infer<typeof formSchema>) => {
//         console.log(data)
//     }
//     console.log("Errors: ", form.formState.errors);
//     console.log("Watched block_name: ", form.watch("block_name"));


//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                 <FormField
//                     control={form.control}
//                     name="block_name"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Block Name</FormLabel>
//                             <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                 <FormControl>
//                                     <SelectTrigger>
//                                         <SelectValue placeholder="Select a block" />
//                                     </SelectTrigger>
//                                 </FormControl>
//                                 <SelectContent>
//                                     <SelectItem value="block 1">Block 1</SelectItem>
//                                     <SelectItem value="block 2">Block 2</SelectItem>
//                                     <SelectItem value="block 3">Block 3</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <Button type="submit">Submit</Button>
//             </form>
//         </Form>
//     )
// }




import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Block } from "@/features/blocks/types/blockTypes"


type TableRow = {
    id: number;
    image: string;
    block_name: string;
    quantity: number;
}

const FormSchema = z.object({
    name: z.string().optional(),
    block_name: z.string().optional(),
    quantity: z.string().transform(val => parseFloat(val)).optional(),
})

export function CrossSectionForm({ blocks, setTableRows, tableRows } : { blocks: Block[], tableRows: TableRow[], setTableRows: React.Dispatch<React.SetStateAction<TableRow[]>> }) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: { name: "", block_name: "", quantity: 0 }
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const block = blocks.find(block => block.name === data.block_name)
        
        if (block) {
            const row: TableRow = {
                id: tableRows.length + 1, 
                image: block.image || "../../../public/assets/example_block.png", 
                block_name: data.block_name || "",
                quantity: data.quantity || 0
            }

            setTableRows([...tableRows, row])
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cross Section Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Cross Section Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="block_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Block Name</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a block" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {blocks.map((block) => (
                                        <SelectItem key={block.id} value={block.name}>
                                            {block.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl>
                                <Input placeholder="1" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Fill Table</Button>
            </form>
        </Form>
    )
}

export default CrossSectionForm
