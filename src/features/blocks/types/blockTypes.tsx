export type Block = {
    id?: number;
    name: string;
    vol_per_block: number;
    width: number;
    height: number;
    depth: number;
    face_area: number;
    image: string | null | undefined;
};

export type BlockUpdate = Block & {
    id: number;
};

export type Input = {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
}
