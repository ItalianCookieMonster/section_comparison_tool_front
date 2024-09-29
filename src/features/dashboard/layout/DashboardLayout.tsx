import { Outlet } from "react-router-dom"
import Footer from "../../../components/Footer"
import NavBar from "../../../components/NavBar"

const DashboardLayout = ({ isAdmin }: { isAdmin: boolean }) => {
    return (
        <>
            {isAdmin && <NavBar type="admin" />}
            {!isAdmin && <NavBar type="admin" sections={[{ path: 'section' }]} />}
            <main className="min-h-[90vh]"><Outlet /></main>
            <Footer />
        </>
    )
}
export default DashboardLayout  