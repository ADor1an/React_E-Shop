import React from 'react';
import classes from './Dropdown.module.css'
import {
    Link,
    NavLink
    } from "react-router-dom";

const Dropdown = ({title, links}) => {

    console.log(links)
    return (
        <div className={classes.dropdown}>
            <button className={classes.dropdownBtn} >
                {title}
            </button>

            <div className={classes.dropdownMenu}>

                   {links.map((link, index) => (
                           <NavLink
                               key={link.path}
                               to={link.path}
                               className={classes.dropdownLink}>
                               {link.label}
                           </NavLink>

                   ))}





            </div>



        </div>
    );
};

export default Dropdown;