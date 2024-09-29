import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { logout } from "../../auth/services/authService"
import { useNavigate } from "react-router-dom"
import { NavItem } from "./AdminNavItem"


const AdminNav = ({ user }: { user: string }) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate('/login')

    }
    return (
        <nav className="bg-accent">
            <NavLink to="/dashboard">
                <img src="../../../public/assets/logo.png" alt="logo" />
            </NavLink>
            <p>Hello, {user} </p>
            <ul>
                <NavItem to="/admin/blocks" icon="Cuboid" label="Blocks" />
                <NavItem to="/admin/projects" icon="FolderDot" label="Projects" />
                <NavItem to="/admin/sections" icon="BrickWall" label="Sections" />
                <NavItem to="/admin/reports" icon="ClipboardMinus" label="Reports" />
                <NavItem to="/admin/companies" icon="Factory" label="Companies" />
                <NavItem to="/admin/users" icon="UsersRound" label="Users" />
                <NavItem to="/dashboard" icon="CircleArrowLeft" label="Home" />

            </ul>
            <Button variant="outline" onClick={() => handleLogout()}>
                Logout
            </Button>
        </nav>
    )
}
export default AdminNav