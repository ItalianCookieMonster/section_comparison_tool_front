import KeyValueList from "../../../shared/components/KeyValueList"
import { Project } from "../types/types"


const ProjectTable =({ project }: { project: Project }) => {
    return (
        <div>
            <h3 className="font-bold text-4xl text-center my-10">Project Info</h3>
            <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-8 w-full">
                    <KeyValueList keyValueObject={project} />
            </div>
            <h3 className="font-bold text-4xl text-center my-10">Technical Data</h3>
            <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-8 w-full">
                    <KeyValueList keyValueObject={project} />
            </div>

        </div>
    )
}
export default ProjectTable