import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from "./SidebarData";
import './Navbar.css';
import { IconContext } from 'react-icons'
import "../components/Modal/Modal.css";
import ModalInscription from './Modal/ModalInscription';
import ModalConnexion from './Modal/ModalConnexion';
import PrendreCours from './Modal/PrendreCours';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#ffff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <div class="nav_bar_container">
                    <h1 class="etudiantparticulier">Etudiant particulier</h1>
                    <div class="nav_bar_boutton_container">  
                        <ModalInscription />
                        <ModalConnexion />
                        <PrendreCours />
                    </div>
                </div>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineCloseCircle />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
