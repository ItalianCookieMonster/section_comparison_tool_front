import { z } from "zod"


export const CrossSectionFormSchema = z.object({
    name: z.string().optional(), 
    block_id: z
        .string({ required_error: "The field Block is required" })
        .transform(val => parseFloat(val))
        .refine(val => !isNaN(val), {
            message: "Block ID must be a number",
        }),
    quantity: z
        .string({ required_error: "The field Quantity is required" })
        .transform(val => parseFloat(val))
        .refine(val => !isNaN(val), {
            message: "Quantity must be a number and greater than zero",
        }), 
});