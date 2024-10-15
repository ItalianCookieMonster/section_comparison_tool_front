import { useEffect } from "react";
// import DashboardSection from "@/features/dashboard/components/DashboardSection";
import ProjectSection from "@/features/projects/components/ProjectSection";
import Loader from "@/components/Loader";
import { useSectionsContext } from "@/hooks/useSectionsContext";
import { useGetProject } from "@/features/projects/hooks/useGetProject";

const DashboardPage = () => {
    const projectId = localStorage.getItem('project_id');  
    const { setSectionCount } = useSectionsContext();
    const { data: project, isLoading: projectLoading, error } = useGetProject(projectId as string);
    useEffect(() => {
        if (project) {
            setSectionCount(project.sections?.length || 0);
        }
    }, [project, setSectionCount]);

    console.log("Project", project);
    // const [sectionData, setSectionData] = useState<number | null>(null);

    if (projectLoading) {
        return <Loader />
    }

    if (error) {
        console.error('Error getting projects', error);
        return <div>Error: {error.message}</div>;
    }



    return (
        <div className="my-10 mx-auto flex flex-col items-center gap-5 w-full">
            <h1 className="text-5xl font-bold leading-[4.5rem] mb-4">Section Comparison Tool</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


            <ProjectSection />
            {/* {
                sessionsLoading ? <Loader /> :
                    sessionsError ? <div>Error: {sessionsError.message}</div> :
                        <DashboardSection sessions={sessions} />
            } */}

        </div>
    )
};

export default DashboardPage;
