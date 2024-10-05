import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { SectionsProvider } from '../context/SectionContext';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { getUser } from '@/features/users/services/userService';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/Loader';

const MainLayout: React.FC = () => {
    const { data: user, isLoading, error } = useQuery(
        {
            queryKey: ["user"],
            queryFn: getUser,
            refetchOnWindowFocus: false,
        }
    );


    if (isLoading) {
        return <Loader/>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log('user', user);
    return (
        <SectionsProvider>
            <NavBar isAdmin={user?.is_staff}/>
            <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-5">
                <Outlet />
            </main>
            <Footer/>
            <Toaster/>
        </SectionsProvider>
    );
};

export default MainLayout;