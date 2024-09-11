import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/layouts/Layout";
import LandingPage from "../features/landing/pages/LandingPage";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import SectionPage from "../features/dashboard/pages/SectionPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import PrivateLayout from "../shared/layouts/PrivateLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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
                path: "/dashboard",
                element: <DashboardPage />
            },
            {
                path: "/dashboard/sections",
                element: <SectionPage />
            }
        ]
    }
]);

export default router