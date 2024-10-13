import { Button } from "@/components/ui/button"
import { Section } from "../types/types"
import DashboardCard from "./DashboardCard"



const DashboardSection = ({sessions}: {sessions: Section[]}) => {
    return (
        <section className="flex flex-col items-center my-20">
            <h2 className="text-4xl font-bold text-center mb-4 my-10">Dashboard</h2>


            {
                sessions.length == 0 ?
                    <>
                        <p className="my-10">No sections yet, start your comparison by clicking the button below.</p>
                        <Button size="lg" variant="outline">Compare Sections</Button>

                    </> :
                    sessions.map((session) => (
                        <DashboardCard key={session.id} session={session} />
                    ))
            }

        </section>
    )
}
export default DashboardSection