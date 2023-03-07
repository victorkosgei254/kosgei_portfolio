import {useState} from "react";
import {Link} from "react-router-dom";
import "../css/navbar.css"
function Navbar({props})
{
    const [activeLink, setActiveLink] = useState('logo')
    const [menuItems,setMenuItems] = useState([
        {title:"Projects", link:"/projects", id:"projects"},
        {title:"Hire Me", link:"/hireme",id:"hireme"},
        {title:"Resume",link:"/resume", id:"resume" }
    ])
    const isSelected=(id)=> activeLink === id ? "selected":""
    const handleActiveLink = (e)=> setActiveLink(e.target.id)
    return(
        <div className="navbar">
            <div className="logo" id="logo">
                <h1>
                    <Link to="/" id="home" onClick={handleActiveLink}>
                        Kosgei Victor
                    </Link>
                </h1>
            </div>
            <nav>
                <ul>
                    {menuItems.map(
                        item => 
                            <li key={item.id}>
                                <Link onClick={handleActiveLink}
                                    id={item.id} to={item.link}
                                    className={isSelected(item.id)}>
                                    {item.title}
                                </Link>
                            </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;
