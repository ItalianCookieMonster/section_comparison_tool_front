import KeyValueList from "../../../shared/components/KeyValueList"


const keyValueList = [
    { key: "Cement Content", value: "108.9%" },
    { key: "Concrete Density", value: "108.9%" },
    { key: "Average Truck Capacity", value: "19.9" },
    { key: "Cement Content", value: "108.9%" },
    { key: "Concrete Density", value: "108.9%" },
    { key: "Average Truck Capacity", value: "19.9" },
    { key: "Cement Content", value: "108.9%" },
    { key: "Concrete Density", value: "108.9%" },
    { key: "Average Truck Capacity", value: "19.9" },
];

const ProjectTable = () => {
    return (
        <div>
            <h3 className="font-bold text-4xl text-center my-10">Project Info</h3>
            <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-8 w-full">
                    <KeyValueList keyValueList={keyValueList} />
            </div>
            <h3 className="font-bold text-4xl text-center my-10">Technical Data</h3>
            <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-8 w-full">
                    <KeyValueList keyValueList={keyValueList} />
            </div>

        </div>
    )
}
export default ProjectTable