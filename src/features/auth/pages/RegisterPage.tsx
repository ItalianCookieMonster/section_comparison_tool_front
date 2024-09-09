import { Link } from "react-router-dom"
import Header from "../components/Header"
import RegisterForm from "../components/RegisterForm"

const RegisterPage = () => {

    return (
        <>
            <div className="my-10 mx-auto flex flex-col items-center ">
                <Header />
                <RegisterForm />
                <p className="my-5 text-center">Already Registered? <Link to="/login" className="text-primary font-semibold">Sign In</Link></p>
            </div>
        </>
    )
}
export default RegisterPage