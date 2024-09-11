import { z } from "zod";

export const blockSchema = z.object({
    name: z.string().max(255, "Name must be 255 characters or less"),
    vol_per_block: z.string().transform(val => parseFloat(val)),
    width: z.string().transform(val => parseFloat(val)),
    height: z.string().transform(val => parseFloat(val)),
    depth: z.string().transform(val => parseFloat(val)),
    face_area: z.string().transform(val => parseFloat(val)),
    image: z.string().max(255).nullable().optional(), 
});


export const blockFormInputs = [
    {
        name: "name",
        label: "Name",
        placeholder: "Name",
    },
    {
        name: "vol_per_block",
        label: "Volume per block",
        placeholder: "Volume per block",
    },
    {
        name: "width",
        label: "Width",
        placeholder: "Width",
    },
    {
        name: "height",
        label: "Height",
        placeholder: "Height",
    },
    {
        name: "depth",
        label: "Depth",
        placeholder: "Depth",
    },
    {
        name: "face_area",
        label: "Face area",
        placeholder: "Face area",
    },
    {
        name: "image",
        label: "Image",
        placeholder: "Image",
    }
]