import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createProject } from "../services/dashboardService";
import ProjectForm from "../components/ProjectForm";
import ProjectTable from "../components/ProjectTable";
import { z } from "zod";
import { formSchema } from "../schemas/dashboardSchema";
import { Project, Section } from "../types/types";
import DashboardSection from "../components/DashboardSection";

const DashboardPage = () => {
    const [projectData, setProjectData] = useState<Project | null>(null);
    const [sectionData, setSectionData] = useState<Section | null>(null);

    const createProjectMutation = useMutation({
        mutationKey: ['project'],
        mutationFn: (newProject: z.infer<typeof formSchema>) => createProject(newProject),
        onSuccess: (data) => {
            console.log(data);
            setProjectData(data);
        },
        onError: (error) => {
            console.error("Error creating project:", error);
        }
    });


    return (
        <div className="my-10 mx-auto flex flex-col items-center gap-5">
            <h1 className="text-5xl font-bold leading-[4.5rem] mb-4">Section Comparison Tool</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


            {!projectData && (<ProjectForm onSubmit={createProjectMutation.mutateAsync} />)}
            {createProjectMutation.isError && <div>Error: {createProjectMutation.error.message}</div>}
            {projectData && <ProjectTable project={projectData} />}

            <DashboardSection sectionData={sectionData} />

        </div>
    )
};

export default DashboardPage;

