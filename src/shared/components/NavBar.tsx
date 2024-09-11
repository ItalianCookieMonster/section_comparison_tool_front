import React from "react"
import { Button } from "../../ui/button"
import { NavLink } from "react-router-dom"

type Section = {
    name: string;
};

type NavBarProps  = {
    type: 'user' | 'admin' | 'landing';
    sections: Section[];
}
const NavBar: React.FC<NavBarProps> = ({type, sections}) => {

    return (
        <nav className="flex justify-between items-center p-5">
            <img src="../../../../public/assets/logo.png" alt="logo" className="max-w-[100px]"/>
            <ul className="flex justify-center items-center gap-4">
                {type === 'user' || type === 'admin' ? <li className="border-b-2 border-b-transparent py-2 hover:border-b-primary"><NavLink to='/dashboard'>Dashboard</NavLink></li> : null}
                {type === 'admin' ? <li className="border-b-2 border-b-transparent hover:border-b-primary py-2"><NavLink to='/admin'>Admin</NavLink></li> : null}
                {sections && sections.length > 0 && sections.map((section, index) => <li  className="border-b-2 border-b-transparent hover:border-b-primary py-2"key={index}><NavLink to={`/${section}`}>Section {index + 1}</NavLink></li>) }
            </ul>
            <Button variant="outline" size="sm">{ type === 'landing' ? 'Sign Up' : 'Sign Out'}</Button>
        </nav>
    )
}
export default NavBar