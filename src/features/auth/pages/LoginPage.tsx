import { Link } from "react-router-dom"
import z from "zod"
import { login } from "../services/authService"
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header"
import { loginSchema } from "../schemas/authSchema";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/useToast";
import { formatErrorMessage } from "@/utils/formatErrorMessage";

const LoginPage = () => {
    const navigate = useNavigate();
    const { toast } = useToast();


    const handleLogin = async (values: z.infer<typeof loginSchema>) => {
        try {

            const response = await login({
                username: values.username,
                password: values.password
            });

            if (response) {
                navigate("/");
            }
        } catch (error) {
            const errorMessage = formatErrorMessage(error);
            toast({
                title: "Error",
                description: errorMessage,
                variant: "destructive",
            });

        }
    };

    return (
        <>
            <div className="my-10 mx-auto flex flex-col items-center ">
                <Header />
                <LoginForm onSubmit={handleLogin} />
                <p className="my-5 text-center">Not registered yet? <Link to="/register" className="text-primary font-semibold">Sign Up</Link></p>
                <Toaster />
            </div>
        </>
    )
}
export default LoginPage