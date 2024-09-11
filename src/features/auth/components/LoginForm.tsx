import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../ui/button";
import { Form } from "../../../ui/form";
import { FormInputField } from "../../../shared/components/FormInputFields";
import { loginSchema } from "../schemas/authSchema";

const LoginForm = ({ onSubmit }: { onSubmit: (values: z.infer<typeof loginSchema>) => void }) => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 grid grid-cols-2 gap-y-0 items-center justify-center mx-4 w-[60vw] justify-items-center my-10">
                <FormInputField
                    label="Username"
                    name="username"
                    placeholder="Username"
                    customStyle="col-span-2"
                    field={form.register('username')}
                />
                <FormInputField
                    label="Password"
                    name="password"
                    placeholder="Password"
                    customStyle="col-span-2"
                    field={form.register('password')}
                    type="password"
                />

                <Button type="submit" className="col-span-2 mx-auto w-[20vw] mt-20">Sign In</Button>
            </form>
        </Form>
    );
};

export default LoginForm;