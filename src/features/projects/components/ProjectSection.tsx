
import { useCreateProject } from "../hooks/useCreateProject";

import ProjectForm from "./ProjectForm";
import ProjectTable from "./ProjectTable";
import { ProjectResponse  } from "../types/projectType";



const ProjectSection = ({ projectData }: { projectData: ProjectResponse | undefined}) => {
    const createProjectMutation  = useCreateProject()



    return (
        <section className="w-full">
            {!projectData && (<ProjectForm onSubmit={createProjectMutation.mutateAsync} />)}
            {projectData && <ProjectTable project={projectData} />}
        </section>
    )
}
export default ProjectSection