import { TrendingUp } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CardChart } from "./CardChart"
import KeyValueList from "../../../components/KeyValueList"

export const description = "A pie chart with a label list"


const DashboardCard = () => {

    const keyValueList = [
        { key: "Cement Content", value: "108.9%" },
        { key: "Concrete Density", value: "108.9%" },
        { key: "Average Truck Capacity", value: "19.9" },
        { key: "Cement Content", value: "108.9%" },
        { key: "Concrete Density", value: "108.9%" },
        { key: "Average Truck Capacity", value: "19.9" },
    ];


    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Pie Chart - Label List</CardTitle>
                <CardDescription>
                    <div className="grid grid-cols-2 gap-0 justify-stretch items-stretch w-full border-collapse">
                        <KeyValueList keyValueList={keyValueList} />
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <CardChart />
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}



export default DashboardCard