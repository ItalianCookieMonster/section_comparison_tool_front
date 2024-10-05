import { Navigate, Outlet } from "react-router-dom"
import AdminNav from "../features/admin/components/AdminNav"

import { useQuery } from "@tanstack/react-query";
import { User } from "@/features/users/types/types";

const AdminLayout = () => {
    const { data: user } = useQuery<User>( { queryKey: ["user"], enabled: false });

    if (!user?.is_staff) {
        return <Navigate to="/dashboard" />;
    }


    return (
        <div className="flex">
            <AdminNav user="Admin"/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
export default AdminLayout