import { Navigate } from "react-router-dom"
import { useAuth } from "../../features/auth/hooks/authHook"; 
import DashboardLayout from "../../features/dashboard/layout/DashboardLayout";


const PrivateRoutes = () => {
    const isAdmin = true;
    const { isAuthorized } = useAuth();

    if (isAuthorized === null) {
        return <div>loading...</div>
    }

    if (isAuthorized) {
        return (
            <DashboardLayout isAdmin={isAdmin} />
        )
    } else {
        return <Navigate to="/login" />;
    };

}
export default PrivateRoutes