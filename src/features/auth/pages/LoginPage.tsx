import { useState } from "react"
import { Link } from "react-router-dom"
import z from "zod"
import { login } from "../services/authService"
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header"
import Modal from "../../../shared/components/Modal"
import { loginSchema } from "../schemas/authSchema";
import { AxiosError } from "axios";

const LoginPage = () => {
    const [modalData, setModalData] = useState({
        open: false,
        title: "",
        message: "",
        borderColor: "",
    });

    const navigate = useNavigate();


    const handleOnChangeModal = () => {
        setModalData({ ...modalData, open: false })
    }

    const handleLogin = async (values: z.infer<typeof loginSchema>) => {
        try {

            const response = await login({
                username: values.username,
                password: values.password
            });

            if (response) {
                console.log('I am here')
                navigate("/dashboard");
            }

        } catch (error) {
            let errorMessage = "An unexpected error occurred.";
            if (error instanceof AxiosError) {
                if (error.response && error.response.data) {
                    const backendErrors = error.response.data;
                    errorMessage = "";

                    for (const key in backendErrors) {
                        if (Object.prototype.hasOwnProperty.call(backendErrors, key)) {
                            const fieldErrors = backendErrors[key];
                            if (Array.isArray(fieldErrors)) {
                                errorMessage += `${key}: ${fieldErrors.join(", ")}\n`;
                            } else {
                                errorMessage += `${key}: ${fieldErrors}\n`;
                            }
                        }
                    }
                }

            } else {
                errorMessage = "An unexpected error occurred.";
            }

            setModalData({
                open: true,
                title: "Error",
                message: errorMessage,
                borderColor: "border-error",
            });

        }
    };

    return (
        <>
            <div className="my-10 mx-auto flex flex-col items-center ">
                <Header />
                <LoginForm onSubmit={handleLogin} />
                <p className="my-5 text-center">Not registered yet? <Link to="/register" className="text-primary font-semibold">Sign Up</Link></p>
                <Modal
                    open={modalData.open}
                    title={modalData.title}
                    message={modalData.message}
                    border_color={modalData.borderColor}
                    onOpenChange={handleOnChangeModal}

                />
            </div>
        </>
    )
}
export default LoginPage