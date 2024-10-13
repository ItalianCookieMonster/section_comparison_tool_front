import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Trash } from "lucide-react";


type TableRowData = {
    id: number;
    image: string;
    block_name: string;
    quantity: number;
}

const CrossSectionTable = ({ tableRows, deleteRow }: { tableRows: TableRowData[], deleteRow: (id: number) => void }) => {
    return (
        <Table className="w-full">
            <TableCaption>Blocks in section</TableCaption>
            <TableHeader className="bg-neutral-200">
                <TableRow className="bg-accent grid grid-cols-[1fr_1fr_1fr_0.5fr] items-center justify-items-center pt-4">
                    <TableHead className="text-black text-center">Image</TableHead>
                    <TableHead className="text-black text-center">Name</TableHead>
                    <TableHead className="text-black text-center ">Quantity</TableHead>
                    <TableHead className="text-black text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <div className="h-[60vh] overflow-y-auto w-full">
                <TableBody className="block w-full bg-neutral-100">
                    {
                        tableRows && tableRows.map((row) => (
                            <TableRow key={row.id} className="grid grid-cols-[1fr_1fr_1fr_0.5fr] items-center justify-items-center">
                                <TableCell>
                                    <img src='../../../public/assets/example_block.png' alt="Table Image" style={{ width: '100px', height: 'auto' }} />
                                </TableCell>
                                <TableCell>
                                    {row.block_name === "" ? "Block Name" : row.block_name}
                                </TableCell>
                                <TableCell>
                                    {row.quantity}
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => deleteRow(row.id)} size="icon" variant="ghost">
                                        <Trash />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>

            </div>
        </Table>
    )
}
export default CrossSectionTable