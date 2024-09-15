import Footer from "../../../shared/components/Footer"
import NavBar from "../../dashboard/components/NavBar"

const LandingPage = () => {
    return (
        <>
            <NavBar type="landing" />
            <main className="min-h-[90vh]">LandingPage</main>
            <Footer />
        </>
    )
}
export default LandingPage