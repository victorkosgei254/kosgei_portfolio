import {Outlet} from "react-router-dom"
import Footer from "./pages/components/Footer"
import Navbar from "./pages/components/Navbar"

function Layout({props})
{
    return(
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
export default Layout;
