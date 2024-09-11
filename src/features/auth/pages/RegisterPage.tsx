import { useState } from "react"
import { Link } from "react-router-dom"
import z from "zod"
import Header from "../components/Header"
import RegisterForm from "../components/RegisterForm"
import { registerUser } from "../services/authService"
import { useNavigate } from "react-router-dom";
import { formSchema } from "../schemas/authSchema";
import Modal from "../../../shared/components/Modal"




const RegisterPage = () => {
    const [modalData, setModalData] = useState({
        open: false,
        title: "",
        message: "",
        borderColor: "",
    });

    const handleOnChangeModal = () => {
        if (modalData.title === "Registration Successful") {
            navigate("/login")
        }
        setModalData({ ...modalData, open: false })
    }

    const navigate = useNavigate();


    const handleUserRegistration = async (values: z.infer<typeof formSchema>) => {
        const userResponse = await registerUser({
            username: values.username,
            password: values.password,
            email: values.email,
            full_name: values.full_name,
        });

        if (userResponse && userResponse.status === 201) {
            return userResponse;
        }
        throw new Error("User registration failed");
    };


    const handleRegister = async (values: z.infer<typeof formSchema>) => {
        try {
            await handleUserRegistration(values);

            setModalData({
                open: true,
                title: "Registration Successful",
                message: "Your account has been created successfully. You can now log in.",
                borderColor: "border-accent",
            });
        } catch (error) {
            let errorMessage = "An unexpected error occurred.";

            if (error.response && error.response.data) {
                const backendErrors = error.response.data;
                errorMessage = "";

                for (const key in backendErrors) {
                    if (Object.prototype.hasOwnProperty.call(backendErrors, key)) {
                        const fieldErrors = backendErrors[key];
                        errorMessage += `${key}: ${fieldErrors.join(", ")}\n`;
                    }
                }
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
                <RegisterForm onSubmit={handleRegister} />
                <p className="my-5 text-center">Already Registered? <Link to="/login" className="text-primary font-semibold">Sign In</Link></p>

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
export default RegisterPage