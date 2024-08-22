import React, { useState } from "react";
import {FaBars ,FaReact} from "react-icons/fa";
import { Link } from "react-router-dom";
import {HiX} from "react-icons/hi";
import './style.scss';


const NavBar = () =>{

    const[toggleIcon, setToggleIcon]=useState(false);

    const data = [
        {
            label:"HOME",
            to:"/dinesh"
        },
        {
            label:"ABOUT",
            to:"/about"
        },
        {
            label:"SKILLS",
            to:"/skills"
        },
        {
            label:"RESUME",
            to:"/resume"
        },
        {
            label:"PORTFOLIO",
            to:"/portfolio"
        },
        {
            label:"CONTACT",
            to:"/contact"
        },
    ]

    const handleToggleIcon = () =>{
        setToggleIcon(!toggleIcon);
    }

    return(
        <div className="navbar">
            <div className="navbar_container">
                <Link to={"/"} className="navbar_container_logo">
                    <FaReact size={30}/>
                </Link>
            </div>
            <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
                {data.map((item, index)=>(
                    <li className="navbar_container_menu_item" key={index} >
                        <Link to={item.to} className="navbar_container_menu_item_link">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="nav-icon" onClick={handleToggleIcon}>
                {toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>}
            </div>

        </div>
    )
}

export default NavBar;