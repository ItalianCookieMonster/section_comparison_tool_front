import { Block } from "@/features/blocks/types/blockTypes";
import { Section } from "@/features/dashboard/types/types";

export type BlockPerSection = {
    section: number;
    block: number;
    quantity: number;
    block_name?: string;  
};


export type TableRowData = {
    id: number;
    image: string;
    block_name: string;
    quantity: number;
}


export type CreateSection = {
    project_id: number;
}


export type SectionBlockResponse = {
    section: number; 
    block: Block;    
    quantity: number; 
}

export type CalculatedData = {
    height: number;
    face_area: number;
    concrete_volume: number;
};

export type CalculateSectionResponse = {
    message: string;
    section: Section;
    calculated_data: CalculatedData;
};