import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import AdminLayout from "../layouts/AdminLayout";
import PrivateRoutes from "../routing/PrivateRoutes";
import AdminComapniesPage from "../features/admin/companies/pages/AdminComapniesPage";
import AdminReportPage from "../features/admin/report/pages/AdminReportPage";
import AdminCrossPage from "../features/admin/crossSection/pages/AdminCrossPage";
import AdminProjectPage from "../features/admin/projects/pages/AdminProjectPage";
import AdminBlockPage from "../features/admin/blocks/pages/AdminBlockPage";
import CrossSectionPage from "../features/crossSection/pages/CrossSectionPage";
import MainLayout from "../layouts/MainLayout";


const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },


    {
        path: '/',
        element: <PrivateRoutes />,
        children: [
            {
                path: '',
                element: <MainLayout />,
                children: [
                    {
                        path: '',
                        element: <DashboardPage />
                    },

                    {
                        path: '/section/:sectionId',
                        element: <CrossSectionPage />
                    },
                ]
            },
            {
                path: 'admin',
                element: <AdminLayout />,
                children: [
                    {
                        path: 'blocks',
                        element: <AdminBlockPage />
                    },
                    {
                        path: 'projects',
                        element: <AdminProjectPage />
                    },
                    {
                        path: 'corss-sections',
                        element: <AdminCrossPage />
                    },
                    {
                        path: 'reports',
                        element: <AdminReportPage />
                    },
                    {
                        path: 'companies',
                        element: <AdminComapniesPage />
                    }
                ]
            }
        ]

    }
]);

export default router;