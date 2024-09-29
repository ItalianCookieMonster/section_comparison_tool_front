import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { SectionsProvider } from '../context/SectionContext';
import Footer from '@/components/Footer';

const MainLayout: React.FC = () => {
    return (
        <SectionsProvider>
            <NavBar type="admin" />
            <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-5">
                <Outlet />
            </main>
            <Footer/>
        </SectionsProvider>
    );
};

export default MainLayout;