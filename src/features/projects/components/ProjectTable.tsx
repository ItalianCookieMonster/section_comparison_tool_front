import KeyValue from "@/components/KeyValue";
import { ProjectResponse } from "../types/projectType";
import { Building, DollarSign, Wrench } from "lucide-react";  // Usa icone a tema

const ProjectTable = ({ project }: { project: ProjectResponse }) => {
    return (
        <div className="max-w-6xl mx-auto p-5">
            <h3 className="font-bold text-4xl text-center my-10">Project Overview</h3>

            <section>
                <h4 className="font-bold text-3xl mb-5 text-primary">General Information</h4>
                <div className="w-full grid grid-cols-2 gap-8">
                    <KeyValue keyProp="Title" value={project.title} icon={<Building />} />
                    <KeyValue keyProp="Company" value={project.company_name} icon={<Building />} />
                    <KeyValue keyProp="Address" value={project.address} icon={<Building />} />
                    <KeyValue keyProp="Zip Code" value={project.zip_code} icon={<Building />} />
                </div>
            </section>

            <section className="my-10">
                <h4 className="font-bold text-3xl mb-5 text-primary">Technical Data</h4>
                <div className="w-full grid grid-cols-3 gap-8">
                    <KeyValue keyProp="Concrete Density" value={`${project.concrete_density}`} icon={<Wrench />}/>
                    <KeyValue keyProp="Infill Density" value={`${project.infill_density}`} icon={<Wrench />}/>
                    <KeyValue keyProp="Cement Content" value={`${project.cement_content}`} icon={<Wrench />}/>
                </div>
            </section>

            <section>
                <h4 className="font-bold text-3xl mb-5 text-primary">Costs</h4>
                <div className="grid grid-cols-3 gap-8">
                    <KeyValue keyProp="Concrete Cost" value={`€${project.concrete_cost}`} icon={<DollarSign />}/>
                    <KeyValue keyProp="Infill Cost" value={`€${project.infill_cost}`} icon={<DollarSign />}/>
                    <KeyValue keyProp="Labour Cost" value={`€${project.labour_cost}`} icon={<DollarSign />}/>
                    <KeyValue keyProp="Total Royalty" value={`€${project.royalty}`} icon={<DollarSign />}/>
                </div>
            </section>
        </div>
    );
};

export default ProjectTable;