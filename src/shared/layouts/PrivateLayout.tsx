import { Navigate } from "react-router-dom"
import { useAuth } from "../../features/auth/hooks/authHook";
import Layout from "./Layout";



const PrivateLayout = () => {
    const { isAuthorized } = useAuth();

    if (isAuthorized === null) {
        return<div>loading...</div>
    }

    if (isAuthorized) {
        return (
            <Layout />
        )
    } else {
        return <Navigate to="/login" />;
    };

}
export default PrivateLayout