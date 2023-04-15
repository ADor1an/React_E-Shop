import React, { useState } from 'react';
// import classes from './Dropdown.module.css'
import classes from './SecondDrop.module.css'
import {
    Link,
    NavLink
    } from "react-router-dom";
const Dropdown = ({title, links}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        if (window.innerWidth <= 768) {
            setIsOpen(!isOpen)
        }
        if (!isOpen) {

        }
      }
    return (
        <div className={classes.dropdown}>
            <button className={`${classes.dropdownBtn} ${isOpen ? classes.activeDropBtn : ''}`}
            onClick={toggleDropdown}
            >
                {title}
            </button>
            <div className={`${classes.dropdownMenu} ${isOpen ? classes.active : ''}`}>
                   {links.map((link, index) => (
                           <NavLink
                               key={link.path}
                               to={link.path}
                               className={classes.dropdownLink}
                               onClick={() => setIsOpen(false)}
                           >
                               {link.label}
                           </NavLink>
                   ))}
            </div>
        </div>
    );
};
export default Dropdown;