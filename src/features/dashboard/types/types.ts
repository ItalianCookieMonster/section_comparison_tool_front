// Project Type
export type Project = {
    title: string;
    user?: number | null;  
    contact?: string | null;
    company_name?: string | null;
    concrete_density?: number | null;
    currency?: string | null;
    system?: string | null;
    concrete_cost?: string | null;  
    labour_cost?: string | null;    
    avg_truck_capacity?: number | null;
    infill_density?: number | null;
    infill_cost?: string | null;    
    avg_truck_cost?: string | null; 
    avg_production_time?: number | null;
    royalty?: string | null;               
    pur_per_year?: number | null;
    cement_content?: number | null;
    address?: string | null;
    zip_code?: string | null;
    language?: string | null;
    sections?: Section[];         
};


export type Section = {
    id: number;
    user: number;                 
    project?: number | null;  
    title?: string | null;
    height?: number | null;
    faceArea?: number | null;
    labourCost?: string | null;    
    concrete?: number | null;
    concreteCost?: string | null; 
    infill?: number | null;
    infillCost?: string | null;    
    deliveryWeight?: number | null;
    deliveryCost?: string | null;  
    co2Emissions?: number | null;
    royalties?: string | null;     
    blocks?: SectionBlock[];       
};

// Block Type
export type Block = {
    id: number;
    name: string;
    volPerBlock: number;
    width: number;
    height: number;
    depth: number;
    faceArea: number;
    image: string;
};


export type SectionBlock = {
    id: number;
    section: number;               
    block: number;                
    quantity: number;
};