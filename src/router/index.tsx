import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../features/landing/pages/LandingPage";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import SectionPage from "../features/dashboard/pages/SectionPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import PrivateLayout from "../shared/layouts/PrivateLayout";
import AdminLayout from "../shared/layouts/AdminLayout";


const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: "/dashboard",
        element: <PrivateLayout />,
        children: [
            {
                path: "",
                element: <DashboardPage />
            },
            {
                path: "section",
                element: <SectionPage />
            }, 
            {
                path: "admin",
                element: <AdminLayout />
            }
        ]
    }
]);

export default router