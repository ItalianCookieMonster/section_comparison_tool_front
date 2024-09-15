import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"
import { BlockUpdate } from "../../features/blocks/types/types"


type CustomTableProps = {
    caption: string;
    data: BlockUpdate[];
    handleClick: (id: number) => void;
}

const CustomTable = ({ caption, data, handleClick }: CustomTableProps) => {
    return (
        <Table>
            <TableCaption>{caption}</TableCaption>
            <TableHeader>
                <TableRow>
                    {
                        data[0] && Object.keys(data[0]).map((key) => (
                            <TableHead key={key}>{key}</TableHead>
                        ))
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                {data && data.map((row) => (
                    <TableRow key={row.id} onClick={() =>handleClick(row.id)}>
                        {
                            Object.entries(row).map(([key, value]) => (
                                <TableCell key={key}>
                                    {key === 'image' ? (
                                        <img src='../../../public/assets/example_block.png' alt="Table Image" style={{ width: '100px', height: 'auto' }} />
                                    ) : (
                                        value
                                    )}
                                </TableCell>
                            ))
                        }
                    </TableRow>
                ))}

            </TableBody>
        </Table>
    )
}
export default CustomTable