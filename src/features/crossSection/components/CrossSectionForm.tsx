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
import { CrossSectionFormSchema } from "../schemas/crossSectionSchema"
import { TableRowData } from "../types/crossSectionTypes"
import { useCreateBlockPerSection } from "../hooks/useCreateBlockPerSection"
import { useParams } from "react-router-dom"




export function CrossSectionForm({ blocks, setTableRows, tableRows } : { blocks: Block[], tableRows: TableRowData[], setTableRows: React.Dispatch<React.SetStateAction<TableRowData[]>> }) {
    const form = useForm<z.infer<typeof CrossSectionFormSchema>>({
        resolver: zodResolver(CrossSectionFormSchema),
    })
    const { sectionId } = useParams(); 
    const updateSectionBlockMutation = useCreateBlockPerSection()

    function onSubmit(data: z.infer<typeof CrossSectionFormSchema>) {
        const block = blocks.find(block => block.id === data.block_id)
        
        if (block && data.block_id !== undefined && data.quantity !== undefined) {
            const row: TableRowData = {
                id: tableRows.length + 1, 
                image: block.image ?? "../../../public/assets/example_block.png", 
                block_name: block.name || "Block Name",
                quantity: data.quantity ?? 0
            }

            updateSectionBlockMutation.mutate({ block: data.block_id, quantity: data.quantity, section: Number(sectionId) })

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
                    name="block_id"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Block Name</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a block" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {blocks.map((block) => (
                                        <SelectItem key={block.id} value={block.id?.toString() || ""}>
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
