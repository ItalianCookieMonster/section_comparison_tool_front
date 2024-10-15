import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { SectionsContextProvider } from '@/context/SectionContext';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { getUser } from '@/features/users/services/userService';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/Loader';
import { useGetProject } from '@/features/projects/hooks/useGetProject';


const MainLayout: React.FC = () => {
    const projectId = localStorage.getItem('project_id'); 
    const { data: user, isLoading, error } = useQuery(
        {
            queryKey: ["user"],
            queryFn: getUser,
            refetchOnWindowFocus: false,
        }
    );

    const { data: project, isLoading: projectLoading  } = useGetProject(projectId as string);





    if (isLoading || projectLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log("Project in main layout: ", project);

    return (
        <SectionsContextProvider>
            <NavBar isAdmin={user?.is_staff} project={project} />
            <main className="flex-grow flex flex-col items-center justify-center gap-5 ">
                <Outlet />

                <Toaster />
            </main>
            <Footer />

        </SectionsContextProvider>
    );
};

export default MainLayout;