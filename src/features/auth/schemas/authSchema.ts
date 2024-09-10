import { z } from "zod";


export const formSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
    full_name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    phone_number: z.string().min(8, { message: "Phone number must be at least 8 characters." }).optional(),
    company_name: z.string().optional(),
    job_title: z.string().optional(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
});