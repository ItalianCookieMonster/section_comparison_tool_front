import { useGetAllBlocks } from "@/features/blocks/hooks/useGetAllBlocks"
import { CrossSectionForm } from "../components/CrossSectionForm"
import Loader from "@/components/Loader"
import { useState } from "react"
import CrossSectionTable from "@/features/crossSection/components/CrossSectionTable"
import { Button } from "@/components/ui/button"

type TableRow = {
    id: number
    image: string
    block_name: string
    quantity: number
}

const CrossSectionPage = () => {
    const { data: blocks, isLoading, error } = useGetAllBlocks()
    const [tableRows, setTableRows] = useState<TableRow[]>([]);

    const deleteRow = (id: number) => {
        setTableRows(tableRows.filter(row => row.id !== id))
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-[3fr,5fr] gap-4">
            <div className="px-8">
                <h1 className="text-5xl font-bold leading-[4.5rem] mb-4">Section Details</h1>
                <p className="my-4">Choose a section name, select the type of block. You’ll be able to change quantities in the table</p>
                {
                    isLoading ?
                        <Loader /> :
                        error ? <p>Error: {error.message}</p> :
                            <CrossSectionForm blocks={blocks} setTableRows={setTableRows} tableRows={tableRows} />
                }
            </div>
            <div className="px-8">
                <CrossSectionTable tableRows={tableRows} deleteRow={deleteRow} />
            </div>
            <div className="col-span-2 flex justify-center items-center mt-4">
                <Button size="lg" className="w-[300px]">Calculate</Button>
            </div>
        </div>
    )
}
export default CrossSectionPage