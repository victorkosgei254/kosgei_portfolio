import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//Pages 
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import HireMe from "./pages/HireMe"
import PageNotFound from "./pages/404.js"
import Resume from "./pages/Resume"
//components
import Navbar from "./pages/components/Navbar"
function App() {
    return( 
        <>
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<AboutMe />}/>
                <Route path='/projects' element = {<Projects />}/>
                <Route path="/hireme" element = {<HireMe/>} />
                <Route path="/resume" element = {<Resume />}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
