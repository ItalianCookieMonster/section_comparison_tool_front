import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { logout } from "../features/auth/services/authService";
import { useSections } from "../hooks/useSections";
import { toast } from "@/hooks/useToast";


type NavBarProps = {
    isAdmin: boolean;
};

const NavBar = ({ isAdmin }: NavBarProps) => {
    const { sections } = useSections()
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        toast({
            title: "Logout",
            description: "You have successfully logged out.",
            variant: "success",
        });
        navigate('/login');

    };

    return (
        <nav className="flex justify-between items-center px-10 py-2 shadow">
            <img src="../../../../public/assets/logo.png" alt="logo" className="max-w-[100px]" />
            <ul className="flex justify-center items-center gap-4">
                <li className="border-b-2 border-b-transparent hover:border-b-primary py-2">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                {isAdmin && (
                    <li className="border-b-2 border-b-transparent hover:border-b-primary py-2">
                        <NavLink to="/admin">Admin</NavLink>
                    </li>
                )}
                {sections &&
                    sections.map((_section, index) => (
                        <li className="border-b-2 border-b-transparent hover:border-b-primary py-2" key={index}>
                            <NavLink to={`/dashboard/section/${index + 1}`}>CrossSection {index + 1}</NavLink>
                        </li>
                    ))}
            </ul>
            <Button variant="outline" onClick={handleLogout}>
                Logout
            </Button>
        </nav>
    );
};

export default NavBar;