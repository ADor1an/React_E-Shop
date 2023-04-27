import React, {Fragment, useEffect, useState} from 'react';
import {Typography, Button} from "@mui/material";
import {Route, Link, Routes, NavLink} from 'react-router-dom'
import {BsBasket3, BsXCircle} from "react-icons/bs";
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai"; //libs
import classes from './Header.module.css'
import Basket from "./Basket/Basket";
import Dropdown from "../UI/Dropdown/Dropdown";
import BurgerSlip from "./BurgerSlip/BurgerSlip"; //my ui components
import { About }  from '../../pages/About'
import  Accessories  from '../../pages/Accessories'
import { Contacts } from '../../pages/Contacts'
import HomePage from "../../pages/HomePage"
import Products from '../../pages/Products'
import MacPro from "../../pages/prdcts/MacPro";
import MacStudios from "../../pages/prdcts/MacStudios";
import MacMini from "../../pages/prdcts/MacMini";
import Displays from "../../pages/prdcts/Displays";
import Macbooks from "../../pages/prdcts/Macbooks";
import Monoblocks from "../../pages/prdcts/Monoblocks"; //pages
export default function Header ({basket, mMini, macPro, mStudio, monoblocs, macbooks, displays,addToBasket, ...props}) {
    const [isClickedMenu, setIsClickedMenu] = useState(false)
    const [showBasket, setShowBasket] = useState(false)
    const [count, setCount] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);
    useEffect(() => {
        setIsExpanded(isClickedMenu);
    }, [isClickedMenu]);

    useEffect(() => {
        const body = document.body;
        if (showMenu || showBasket) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'scroll';
        }
    }, [showMenu, showBasket]);
    const links = [
        {path: '/prdcts/monoblocks',
            // label: 'MB M2',
            label: 'Monoblocks',
            // exact
        },
        {path: '/prdcts/macpro',
            label: 'MacPro',
            // exact
        },
        {path: '/prdcts/macstudios',
            label: 'MacStudios',
            // exact
        },
        {path: '/prdcts/macmini',
            label: 'Macmini',
            // exact
        },
        {path: '/prdcts/displays',
            label: 'Monitors',
            // exact
        },
        {path: '/prdcts/macbooks',
            label: 'Macbooks',
            // label: 'MB Pro 16" intel',
            // exact
        },
    ]
    const incr = () => {
        setCount(count => ++count)
      }
    const decr = () => {
        setCount(count => --count)
      }
    const toggleMenu = () => {
        setIsClickedMenu(!isClickedMenu)
        if (!isClickedMenu) {
            setShowMenu(!showMenu)
            setIsExpanded(!isExpanded)
            // document.body.style.overflowY = 'hidden'
        } else {
            setShowMenu(!showMenu)
            setIsExpanded(!isExpanded)
            // document.body.style.overflowY = 'scroll'
        }
    }
    const toggleBasket = () => {
        setShowBasket(!showBasket )
        if (!showBasket) {
            // document.body.style.overflowY = 'hidden'
        } else  {
            // document.body.style.overflowY = 'unset'
        }
    }
    const closeMenuOnTransition = () => {
        setIsClickedMenu(false)
        setShowMenu(false)
        document.body.style.overflowY = 'unset'

    }
    return (
   <>
       <header>
           <div className={classes.headerWrapper}>
               <nav>
               <span className={classes.logo}>
                   <NavLink to="/"
                         onClick={closeMenuOnTransition}
                   > SM staff </NavLink>
               </span>
                   <ul
                       className={`${classes.menuList} ${isClickedMenu ? classes.clicked : ''}`}
                   >
                       <li className={classes.menuItem}>
                           <NavLink to="/about"
                                 onClick={closeMenuOnTransition}
                           >About</NavLink>
                       </li>
                       <Dropdown className={classes.menuItem}
                                 title='Products'
                                 links={links}
                                 closeMenu={closeMenuOnTransition}
                       />
                       <li className={classes.menuItem}>
                           <NavLink to=""
                                 onClick={closeMenuOnTransition}
                           >Prices</NavLink>
                       </li>
                       <li className={classes.menuItem}>
                           <NavLink to="/contacts"
                                 onClick={closeMenuOnTransition}
                           >Contacts</NavLink>
                       </li>
                       <li className={classes.menuItem}>
                           <NavLink to="/accessories"
                                 onClick={closeMenuOnTransition}
                           >Cabinet</NavLink>
                       </li>
                       <li className={classes.menuItem}>
                           <Button className={classes.basketBtn}
                                   // onClick={() => setShowBasket( !showBasket)}/
                                   onClick={toggleBasket}
                           >
                               <BsBasket3  className={classes.basketIcon}/>
                           </Button>
                       </li>
                   </ul>
               </nav>
               <Button
                   onClick={toggleMenu}>
                   <BurgerSlip
                       changeIcon={isClickedMenu}
                       // onClick={() => toggleMenu()}
                       className={classes.dropedMenu}
                   />
               </Button>
           </div>
           {showBasket &&
           <Basket
               basket={basket}
               show={showBasket}
               closeBasket={toggleBasket}
           >
               <div className={classes.basketWrap}>
                   <ul className={classes.basketList}>
                       {basket.map((item, index) => {
                           return(
                                <li key={index} item={item} className={classes.basketItem}>
                                    <picture>
                                        <img className={classes.itemImg} src={item.img} alt=""/>
                                    </picture>
                                    <Typography
                                        gutterBottom
                                        variant="h4">
                                        {item.title}
                                    </Typography>
                                    <div className={classes.countWrap}>
                                    <Button className={classes.countBtn} onClick={incr}><AiFillPlusCircle className={classes.plus}/></Button>
                                        <p className={classes.count}>{count}</p>
                                    <Button className={classes.countBtn} onClick={decr}><AiFillMinusCircle className={classes.minus}/></Button>
                                    </div>
                                </li>
                           )
                       })}
                   </ul>
               </div>
           </Basket>
           }
       </header>
       <Routes>
           <Route  path="/" element={<HomePage/>}/>
           <Route  path="about" element={<About/>}/>
           <Route  path="product" element={<Products/>}/>
           <Route  path="accessories" element={<Accessories/>}/>
           <Route  path="contacts" element={<Contacts/>}/>
           <Route  path="prdcts/monoblocks" element={<Monoblocks
               basket={basket}
               monoblocs={monoblocs}
               addToBasket={addToBasket}
           />}/>
           <Route   path="prdcts/macpro" element={<MacPro
               basket={basket}
               macPro={macPro}
               addToBasket={addToBasket}
           />}/>
           <Route   path="prdcts/macstudios" element={<MacStudios
               basket={basket}
               mStudio={mStudio}
               addToBasket={addToBasket}
           />}/>
           <Route   path="prdcts/macmini" element={<MacMini
               basket={basket}
               mMini={mMini}
               addToBasket={addToBasket}
           />}/>
           <Route   path="prdcts/displays" element={<Displays
               basket={basket}
               displays={displays}
               addToBasket={addToBasket}
           />}/>
           <Route   path="prdcts/macbooks" element={<Macbooks
               basket={basket}
               macbooks={macbooks}
               addToBasket={addToBasket}
           />}/>
       </Routes>
   </>
    )
}