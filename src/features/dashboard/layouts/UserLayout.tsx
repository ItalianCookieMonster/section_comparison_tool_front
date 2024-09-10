import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../../../shared/components/Footer"


const UserLayout = () => {
    return (
        <>
            <main className="min-h-[100vh]">
            <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default UserLayout