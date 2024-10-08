import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../features/auth/hooks/authHook";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const PrivateLayout = () => {
    const isAdmin = true;
    const { isAuthorized } = useAuth();

    if (isAuthorized === null) {
        return <div>loading...</div>
    }

    if (isAuthorized) {
        return (
            <>
                {isAdmin && <NavBar type="admin" />}
                {!isAdmin && <NavBar type="admin" sections={[{ path: 'section' }]} />}
                <main className="min-h-[90vh]"><Outlet /></main>
                <Footer />
            </>
        )
    } else {
        return <Navigate to="/login" />;
    };

}
export default PrivateLayout