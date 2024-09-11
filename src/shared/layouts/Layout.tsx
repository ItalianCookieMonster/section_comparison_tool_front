import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


type NavType = 'user' | 'admin' | 'landing';

const Layout = () => {
    const navType: NavType = 'user';
    const sections = [
        {
            path: "/section1"
        },
    ]


    return (
        <> {
            navType === 'landing' ? <NavBar type="landing" sections={sections} />
                : navType === 'admin' ? <NavBar type="admin" sections={sections} />
                    : <NavBar type="user" sections={sections} />

        }
            <Outlet />
            <Footer />

        </>
    );
};


export default Layout