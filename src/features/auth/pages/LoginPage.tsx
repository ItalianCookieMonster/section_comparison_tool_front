import { Link } from "react-router-dom"
import Header from "../components/Header"

import LoginForm from "../components/LoginForm"

const LoginPage = () => {

    return (
        <>
            <div className="my-10 mx-auto flex flex-col items-center ">
                <Header />
                <LoginForm/>
                <p className="my-5 text-center">Not registered yet? <Link to="/login" className="text-primary font-semibold">Sign Up</Link></p>
            </div>
        </>
    )
}
export default LoginPage