import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../features/auth/hooks/authHook"; 
import Loader from "../components/Loader";


const PrivateRoutes = () => {
    const { isAuthorized } = useAuth();

    if (isAuthorized === null) {
        return <Loader/>
    }

    if (isAuthorized) {
        return (
            <Outlet />
        )
    } else {
        return <Navigate to="/login" />;
    };

}
export default PrivateRoutes