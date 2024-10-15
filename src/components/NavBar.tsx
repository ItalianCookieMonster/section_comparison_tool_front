import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { logout } from "../features/auth/services/authService";
import { useSectionsContext } from "@/hooks/useSectionsContext";
import { toast } from "@/hooks/useToast";
import { Project } from "@/features/projects/types/projectType";
import { useEffect } from "react";

type NavBarProps = {
    isAdmin: boolean;
    project: Project | null;
};

const NavBar = ({ isAdmin, project }: NavBarProps) => {
    const { sectionCount, setSectionCount } = useSectionsContext();
    console.log("Project in navbar: ", project)

    const navigate = useNavigate();


    useEffect(() => {
        if (project) {
            setSectionCount(project.sections?.length ?? 0);
        }
    }, [project, setSectionCount]);
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
                    <NavLink to="/">Dashboard</NavLink>
                </li>
                <li className="border-b-2 border-b-transparent hover:border-b-primary py-2">
                    <NavLink to="/projects">Previous projects</NavLink>
                </li>
                {isAdmin && (
                    <li className="border-b-2 border-b-transparent hover:border-b-primary py-2">
                        <NavLink to="/admin">Admin</NavLink>
                    </li>
                )}
                {Array.from({ length: sectionCount }).map((_, index) => (
                    <li className="border-b-2 border-b-transparent hover:border-b-primary py-2" key={index + 1}>
                        <NavLink to={`/section/${project?.sections?.[index]?.id}`}>CrossSection {index + 1}</NavLink>
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