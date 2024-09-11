import { z } from "zod";

export const formSchema = z.object({
    project_name: z.string().min(1, 'Project name is required'),
    address: z.string().optional(),
    company_name: z.string().optional(),
    zip_code: z.string().optional(),
    contact: z.string().optional(),
    language: z.string().optional(),
    currency: z.string().optional(),
    system: z.string().optional(),
    cement_content: z.string().optional(),
    concrete_density: z.string().optional(),
    concrete_cost: z.string().optional(),
    labour_cost: z.string().optional(),
    avg_truck_capacity: z.string().optional(),
    avg_truck_cost: z.string().optional(),
    infill_capacity: z.string().optional(),
    infill_cost: z.string().optional(),
    avg_production_time: z.string().optional(),
    royalty: z.string().optional(),
    pours_per_year: z.string().optional(),

})


export const projectInfoInputs = [
    {
        name: "project_name",
        label: "Project Name",
        placeholder: "Project Name",
    },
    {
        name: "address",
        label: "Address",
        placeholder: "Address",
    },
    {
        name: "company_name",
        label: "Company Name",
        placeholder: "Company Name",
    },
    {
        name: "zip_code",
        label: "Zip Code",
        placeholder: "Zip Code",
    }, 
    {
        name: "contact",
        label: "Contact",
        placeholder: "Contact",
    },
    {
        name: "currency",
        label: "Currency",
        placeholder: "Currency",
    },
    {   
        name: "language",
        label: "Language",
        placeholder: "Language",
    }, 
    {
        name: "system",
        label: "System",
        placeholder: "System",
    }
]


export const technicalDataInputs = [
    {
        name: "cement_content",
        label: "Cement Content",
        placeholder: "Cement Content",
    },
    {
        name: "concrete_density",
        label: "Concrete Density",
        placeholder: "Concrete Density",
    },
    {
        name: "concrete_cost",
        label: "Concrete Cost",
        placeholder: "Concrete Cost",
    },
    {
        name: "labours_cost",
        label: "Labours Cost",
        placeholder: "Labours Cost",
    },
    {
        name: "avg_truck_capacity",
        label: "Average Truck Capacity",
        placeholder: "Average Truck Capacity",
    },
    {
        name: "avg_truck_cost",
        label: "Average Truck Cost",
        placeholder: "Average Truck Cost",
    },
    {
        name: "infill_capacity",
        label: "Infill Capacity",
        placeholder: "Infill Capacity",
    }, 
    {
        name: "infill_cost",
        label: "Infill Cost",
        placeholder: "Infill Cost",
    },
    {
        name: "avg_production_time",
        label: "Average Production Time",
        placeholder: "Average Production Time",
    },
    {  
        name: "royalty",
        label: "Royalty",
        placeholder: "Royalty",
    }, 
    {
        name: "pours_per_year",
        label: "Pours Per Year",
        placeholder: "Pours Per Year",
    }
]