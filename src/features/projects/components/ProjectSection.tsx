
import { useCreateProject } from "../hooks/useCreateProject";

import ProjectForm from "./ProjectForm";
import ProjectTable from "./ProjectTable";
import Loader from "@/components/Loader";
import { useGetProject } from "../hooks/useGetProject";
import { useQueryClient } from "@tanstack/react-query";
import { useSectionsContext } from "@/hooks/useSectionsContext";
import { useCreateCS } from "@/features/crossSection/hooks/useCreateCS";



const ProjectSection = () => {
    const createProjectMutation  = useCreateProject()
    const projectId = localStorage.getItem('project_id');  
    const { data: project, isLoading: projectLoading, error } = useGetProject(projectId as string);
    const createCS = useCreateCS()
    const queryClient = useQueryClient()

    const { setSectionCount } = useSectionsContext();


    if (projectLoading) {
        return <Loader />
    }

    if (error) {
        console.error('Error getting projects', error);
        return <div>Error: {error.message}</div>;
    }

    const handleNewProject = () => {
        localStorage.removeItem('project_id');
        setSectionCount(0);
        queryClient.invalidateQueries({queryKey: ["project"]});
    };

    const addSection = () => {
        createCS.mutate({project_id: project?.id as number})  
    }


    return (
        <section className="w-full">
            {!project && (<ProjectForm onSubmit={createProjectMutation.mutateAsync} />)}
            {project && <ProjectTable project={project}  handleNewProject={handleNewProject} addSection={addSection}/>}
        </section>
    )
}
export default ProjectSection