import "../css/navbar.css"
function Navbar({props})
{
    return(
        <div className="navbar">
            <div className="logo">
                <h1><a href="/">Kosgei Victor</a></h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/hireme">Hire Me</a></li>
                    <li><a href="/resume">Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;
