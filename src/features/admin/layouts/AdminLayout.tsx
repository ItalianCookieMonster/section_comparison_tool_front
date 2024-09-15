import { Outlet } from "react-router-dom"
import AdminNav from "../components/AdminNav"

const AdminLayout = () => {
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