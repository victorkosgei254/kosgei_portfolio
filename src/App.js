import './App.css';
import {createBrowserRouter,
    createRoutesFromElements, Route,
    RouterProvider} from 'react-router-dom';

//Pages 
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import HireMe from "./pages/HireMe"
import PageNotFound from "./pages/404.js"
import Resume from "./pages/Resume"
/* Components
import Navbar from "./pages/components/Navbar"
import Footer from "./pages/components/Footer"

*/
import Layout from "./Layouts"
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index  element = {<AboutMe />}/>
            <Route path='projects' element = {<Projects />}/>
            <Route path="hireme" element = {<HireMe/>} />
            <Route path="resume" element = {<Resume />}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Route>

    )
)
function App() {
    /*UPDATE TO REACT ROUTER DOM 6.4
     * return( 
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element = {<AboutMe />}/>
                    <Route path='/projects' element = {<Projects />}/>
                    <Route path="/hireme" element = {<HireMe/>} />
                    <Route path="/resume" element = {<Resume />}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )*/
    return (<RouterProvider router={router}/>)
}

export default App;
