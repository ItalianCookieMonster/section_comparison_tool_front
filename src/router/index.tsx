import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../features/landing/pages/LandingPage";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import SectionPage from "../features/dashboard/pages/SectionPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import AdminLayout from "../features/admin/layouts/AdminLayout";
import PrivateRoutes from "../shared/routing/PrivateRoutes";
import DashboardLayout from "../features/dashboard/layout/DashboardLayout";


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
        element: <PrivateRoutes />,
        children: [
            {
                path: "",
                element: <DashboardLayout  />,
                children:  [
                    {
                        path: "section",
                        element: <SectionPage />
                    },
                ]
            },
            {
                path: "admin",
                element: <AdminLayout />,
                children: [
                    {
                        path: "blocks",
                        element: <div>Blocks</div>
                    }
                ]
            }
        ]
    }
]);

export default router