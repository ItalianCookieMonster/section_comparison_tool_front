import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../shared/layouts/PublicLayout";
import LandingPage from "@/features/landing/pages/LandingPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/register',
                element: <RegisterPage/>
            }
        ]
    },
]);

export default router