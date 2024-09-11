import DashboardSection from "../components/DashboardSection"
import ProjectForm from "../components/ProjectForm"
import ProjectTable from "../components/ProjectTable"


const fakeProjectData = true

const DashboardPage = () => {
    return (
        <div className="my-10 mx-auto flex flex-col items-center gap-5">
            <div className="mb-4 text-center">
                <h1 className="text-5xl font-bold leading-[4.5rem] mb-4">Section Comparison Tool</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            {!fakeProjectData ? <ProjectForm /> : <ProjectTable />}

            <DashboardSection />

        </div>
    )
}
export default DashboardPage