import { Button } from "../../../ui/button"
import DashboardCard from "./DashboardCard"

const DashboardSection = (sectionData) => {
    return (
        <section className="flex flex-col items-center my-20">
            <h2 className="text-4xl font-bold text-center mb-4 my-10">Dashboard</h2>


            {
                sectionData ? 
                    <DashboardCard /> :
                    <>
                        <p className="my-10">No sections yet, start your comparison by clicking the button below.</p>
                        <Button size="lg" variant="outline">Compare Sections</Button>

                    </>
            }

        </section>
    )
}
export default DashboardSection