import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../ui/button";
import { Form } from "../../../ui/form";
import { FormInputField } from "../../../shared/components/FormInputFields";
import React from "react";


const formSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
    full_name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    phone_number: z.string().min(8, { message: "Phone number must be at least 8 characters." }),
    company_name: z.string().optional(),
    job_title: z.string().optional(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
});

const RegisterForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 grid grid-cols-2 gap-y-0 items-baseline justify-center mx-4 w-[60vw] gap-x-10 justify-items-center">
                <FormInputField
                    label="Username"
                    name="username"
                    placeholder="Username"
                    field={form.register('username')}
                    error = {form.formState.errors.username?.message}
                />
                <FormInputField
                    label="Full Name"
                    name="full_name"
                    placeholder="John Doe"
                    field={form.register('full_name')}
                    error = {form.formState.errors.full_name?.message}
                />
                <FormInputField
                    label="Phone Number"
                    name="phone_number"
                    placeholder="Phone Number"
                    field={form.register('phone_number')}
                    error = {form.formState.errors.phone_number?.message}
                />
                <FormInputField
                    label="Email"
                    name="email"
                    placeholder="example@me.com"
                    field={form.register('email')}
                    error = {form.formState.errors.email?.message}
                />
                <FormInputField
                    label="Company name"
                    name="company_name"
                    placeholder="company name"
                    field={form.register('company_name')}
                    error = {form.formState.errors.company_name?.message}
                />
                <FormInputField
                    label="Job title"
                    name="job_title"
                    placeholder="job title"
                    field={form.register('job_title')}
                    error = {form.formState.errors.job_title?.message}
                />
                <FormInputField
                    label="Password"
                    name="password"
                    placeholder="Password"
                    field={form.register('password')}
                    type="password"
                    error = {form.formState.errors.password?.message}
                />
                <FormInputField
                    label="Confirm Password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    field={form.register('confirm_password')}
                    type="password"
                    error = {form.formState.errors.confirm_password?.message}
                />

                <Button type="submit" name="Register"  className="col-span-2 mx-auto w-[20vw]">Register</Button>
            </form>
        </Form>
    );
};

export default RegisterForm;