import React from "react"
import { Button } from "../../../ui/button"
import { NavLink, useNavigate } from "react-router-dom"
import { logout } from "../../auth/services/authService";


type Section = {
    path: string;
};

type NavBarProps = {
    type: 'user' | 'admin' | 'landing';
    sections?: Section[];
}


const NavBar: React.FC<NavBarProps> = ({ type, sections }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <nav className="flex justify-between items-center p-5">
            <img src="../../../../public/assets/logo.png" alt="logo" className="max-w-[100px]" />
            <ul className="flex justify-center items-center gap-4">
                {type === 'user' || type === 'admin' ? <li className="border-b-2 border-b-transparent py-2 hover:border-b-primary"><NavLink to='/dashboard'>Dashboard</NavLink></li> : null}
                {type === 'admin' ? <li className="border-b-2 border-b-transparent hover:border-b-primary py-2"><NavLink to='/dashboard/admin'>Admin</NavLink></li> : null}
                {sections && sections.length > 0 && sections.map((section, index) => <li className="border-b-2 border-b-transparent hover:border-b-primary py-2" key={index}><NavLink to={`/dashboard/${section.path}`}>Section {index + 1}</NavLink></li>)}
            </ul>
            {type === 'landing' ?
                <Button variant="outline" size="sm">
                    <NavLink to="/login">Sign IN </NavLink>
                </Button>
                :
                <Button variant="outline" size="sm"
                    onClick={handleLogout}>Sign Out</Button>}

        </nav>
    )
}
export default NavBar