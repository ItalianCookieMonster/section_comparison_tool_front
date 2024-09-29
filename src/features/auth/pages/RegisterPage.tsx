import { Link } from "react-router-dom"
import z from "zod"
import Header from "../components/Header"
import RegisterForm from "../components/RegisterForm"
import { registerUser } from "../services/authService"
import { useNavigate } from "react-router-dom";
import { formSchema } from "../schemas/authSchema";
import { formatErrorMessage } from "@/utils/formatErrorMessage";
import { useToast } from "@/hooks/useToast"
import { Toaster } from "@/components/ui/toaster"




const RegisterPage = () => {
    const { toast } = useToast();
    const navigate = useNavigate();



    const handleRegister = async (values: z.infer<typeof formSchema>) => {
        try {
            await registerUser({
                username: values.username,
                password: values.password,
                email: values.email,
                full_name: values.full_name,
            });

            toast({
                title: "Registration Successful",
                description: "You have successfully registered. Please login.",
                variant: "success",
                duration: 5000,
            });

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (error) {
            const errorMessage = formatErrorMessage(error);
            toast({
                title: "Registration Failed",
                description: errorMessage,
                variant: "destructive",
                duration: 5000,
            })

        }
    };


    return (
        <>
            <div className="my-10 mx-auto flex flex-col items-center ">
                <Header />
                <RegisterForm onSubmit={handleRegister} />
                <p className="my-5 text-center">Already Registered? <Link to="/login" className="text-primary font-semibold">Sign In</Link></p>

                <Toaster />
            </div>
        </>
    )
}
export default RegisterPage