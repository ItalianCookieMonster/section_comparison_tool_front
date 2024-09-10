import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../shared/layouts/PublicLayout";
import LandingPage from "@/features/landing/pages/LandingPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import UserLayout from "../features/dashboard/layouts/UserLayout";
import SectionPage from "../features/dashboard/pages/SectionPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";


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
    {
        path: "/dashboard",
        element: <UserLayout />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardPage/>
            },
            {
                path: "/dashboard/sections",
                element: <SectionPage/>
            }
        ]
    }
]);

export default router