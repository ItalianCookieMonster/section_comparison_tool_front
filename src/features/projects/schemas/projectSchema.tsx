import { z } from "zod";

export const formSchema = z.object({
    // String fields
    title: z.string().min(1, 'Project name is required'),
    address: z.string().optional().nullable(),
    company_name: z.string().optional().nullable(),
    contact: z.string().optional().nullable(),
    zip_code: z.string().optional().nullable(),
    currency: z.string().optional().nullable(),
    language: z.string().optional().nullable(),

    // Float fields (converting string inputs to float numbers)
    concrete_density: z.string().min(1, 'Concrete density is required').transform(val => parseFloat(val)),
    avg_truck_capacity: z.string().transform(val => parseFloat(val)).optional().nullable(),
    infill_density: z.string().transform(val => parseFloat(val)).optional().nullable(),
    avg_production_time: z.string().transform(val => parseFloat(val)).optional().nullable(),
    cem_content: z.string().transform(val => parseFloat(val)).optional().nullable(),
    pur_per_year: z.string().transform(val => parseFloat(val)).optional().nullable(),

    // Decimal fields (converting string inputs to float)
    concrete_cost: z.string().transform(val => parseFloat(val)).optional().nullable(),
    labour_cost: z.string().transform(val => parseFloat(val)).optional().nullable(),
    avg_truck_cost: z.string().transform(val => parseFloat(val)).optional().nullable(),
    infill_cost: z.string().transform(val => parseFloat(val)).optional().nullable(),
    royalty: z.string().transform(val => parseFloat(val)).optional().nullable(),
});



export const projectInfoInputs = [
    {
        name: "title",
        label: "Title",
        placeholder: "Title",
        type: "text",
    },
    {
        name: "address",
        label: "Address",
        placeholder: "Address",
        type: "text",
    },
    {
        name: "company_name",
        label: "Company Name",
        placeholder: "Company Name",
        type: "text",
    },
    {
        name: "zip_code",
        label: "Zip Code",
        placeholder: "Zip Code",
        type: "text",
    }, 
    {
        name: "contact",
        label: "Contact",
        placeholder: "Contact",
        type: "text",
    },
    {
        name: "currency",
        label: "Currency",
        placeholder: "Currency",
        type: "text",
    },
    {   
        name: "language",
        label: "Language",
        placeholder: "Language",
        type: "text",
    }, 
    {
        name: "system",
        label: "System",
        placeholder: "System",
        type: "text",
    }
]


export const technicalDataInputs = [
    {
        name: "cement_content",
        label: "Cement Content %",
        placeholder: "16",
        type: "text"
    },
    {
        name: "concrete_density",
        label: "Concrete Density",
        placeholder: "Concrete Density",
        type: "text"
    },
    {
        name: "concrete_cost",
        label: "Concrete Cost",
        placeholder: "Concrete Cost",
        type: "text",
    },
    {
        name: "labours_cost",
        label: "Labours Cost",
        placeholder: "Labours Cost",
        type: "text",
    },
    {
        name: "avg_truck_capacity",
        label: "Average Truck Capacity",
        placeholder: "Average Truck Capacity",
        type: "text",
    },
    {
        name: "avg_truck_cost",
        label: "Average Truck Cost",
        placeholder: "Average Truck Cost",
        type: "text",
    },
    {
        name: "infill_density",
        label: "Infill Density",
        placeholder: "Infill Density",
        type: "text",
    }, 
    {
        name: "infill_cost",
        label: "Infill Cost",
        placeholder: "Infill Cost",
        type: "text",
    },
    {
        name: "avg_production_time",
        label: "Average Production Time",
        placeholder: "Average Production Time",
        type: "text",
    },
    {  
        name: "royalty",
        label: "Royalty",
        placeholder: "Royalty",
        type: "text",
    }, 
    {
        name: "pours_per_year",
        label: "Pours Per Year",
        placeholder: "Pours Per Year",
        type: "text",
    }
]