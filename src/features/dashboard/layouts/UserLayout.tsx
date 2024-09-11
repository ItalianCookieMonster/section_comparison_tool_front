import { Outlet } from "react-router-dom"
import Footer from "../../../shared/components/Footer"
import NavBar from "../../../shared/components/NavBar"


const UserLayout = () => {
    return (
        <>
            <header>
                <NavBar type="user" sections={[{name: "Section 1"}]} />
            </header>
            <main className="min-h-[100vh]">
            <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default UserLayout