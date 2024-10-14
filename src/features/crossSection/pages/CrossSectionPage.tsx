import { useGetAllBlocks } from "@/features/blocks/hooks/useGetAllBlocks"
import { CrossSectionForm } from "../components/CrossSectionForm"
import Loader from "@/components/Loader"
import { useEffect, useState } from "react"
import CrossSectionTable from "@/features/crossSection/components/CrossSectionTable"
import { Button } from "@/components/ui/button"
import { useParams } from "react-router-dom"
import { useGetBlockPerSection } from "../hooks/useBlockPerSection"
import { SectionBlockResponse } from "../types/crossSectionTypes"
import { useDeleteBlockFromSection } from "../hooks/useDeleteBlockFromSection"
import { useCalculateSection } from "../hooks/useCalculateSection"

type TableRow = {
    id: number
    image: string
    block_name: string
    quantity: number
}

const CrossSectionPage = () => {
    const [tableRows, setTableRows] = useState<TableRow[]>([]);
    const { sectionId } = useParams();
    const { data: blocks, isLoading, error } = useGetAllBlocks();
    const { data: blocksPerSection, isLoading: isLoadingBlocksPerSection } = useGetBlockPerSection(Number(sectionId));
    const deleteBlockFromSection = useDeleteBlockFromSection();
    const calculateSectionMetrics = useCalculateSection()

    console.log('sectionId:', sectionId);
    useEffect(() => {
        if (blocksPerSection && blocksPerSection.length > 0) {
            const rows = blocksPerSection.map((block: SectionBlockResponse) => ({
                id: block.block.id, 
                image: block.block.image ?? "../../../public/assets/example_block.png", 
                block_name: block.block.name || "Block Name", 
                quantity: block.quantity, 
            }));
            setTableRows(rows);
        } else {
            setTableRows([]);
        }
    }, [blocksPerSection]);

    const deleteRow = (blockId: number) => {
        deleteBlockFromSection.mutate(
            { sectionId: Number(sectionId), blockId },  
            {
                onSuccess: () => {
                    const updatedRows = tableRows.filter(row => row.id !== blockId);
                    setTableRows(updatedRows);
                },
            }
        );
    };




    return (
        <div className="grid grid-cols-1 md:grid-cols-[3fr,5fr] gap-4">
            <div className="px-8">
                <h1 className="text-5xl font-bold leading-[4.5rem] mb-4">Section Details</h1>
                <p className="my-4">Choose a section name, select the type of block. You’ll be able to change quantities in the table</p>
                {isLoading && isLoadingBlocksPerSection && <Loader />}
                {error && <p>Error: {error.message}</p>}
                {blocks && (
                    <CrossSectionForm
                        blocks={blocks}
                        setTableRows={setTableRows}
                        tableRows={tableRows}
                    />
                )}
            </div>
            <div className="px-8">
                <CrossSectionTable tableRows={tableRows} deleteRow={deleteRow} />
            </div>
            <div className="col-span-2 flex justify-center items-center mt-4">
                <Button size="lg" className="w-[300px]" onClick={() => calculateSectionMetrics.mutate({sectionId:Number(sectionId)})}>Calculate</Button>
            </div>
        </div>
    );
}

export default CrossSectionPage;