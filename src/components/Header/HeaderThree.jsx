import React, {Fragment, useEffect, useState} from 'react';
import {Typography, Button} from "@mui/material";
import {Route, Link, Routes, NavLink, useLocation,} from 'react-router-dom'
import {BsBasket3, BsXCircle} from "react-icons/bs";
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";
import {CSSTransition, TransitionGroup} from "react-transition-group"; //libs
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
import Monoblocks from "../../pages/prdcts/Monoblocks";
//pages
export default function HeaderThree ({state, links, basket, mMini, macPro, mStudio, monoblocks, macbooks, displays,addToBasket, ...props}) {

    const [isClickedMenu, setIsClickedMenu] = useState(false)
    const [showBasket, setShowBasket] = useState(false)
    // const [count, setCount] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);


    console.log(state)

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
    const incr = () => {
        setCount(count => ++count)
    }
    const decr = () => {
        setCount(count => --count)
    }
    return (
   <>
       <header className={classes.header}>
           <div className={classes.headerWrapper}>
               <nav>
               <span className={classes.logo}>
                   <NavLink to=""
                            onClick={() => {
                                const transitionPageScope = () => {
                                    closeMenuOnTransition()
                                }
                                transitionPageScope()
                            }}
                   > SM staff </NavLink>
               </span>
                   <ul
                       className={`${classes.menuList} ${isClickedMenu ? classes.clicked : ''}`}
                   >
                       <li className={classes.menuItem}>
                           <NavLink to="/about"
                                 onClick={() => {
                                     const transitionPageScope = () => {
                                         closeMenuOnTransition()
                                     }
                                     transitionPageScope()
                                 }}>About</NavLink>
                       </li>
                       <Dropdown className={classes.menuItem}
                                 title='Products'
                                 links={links}
                                 closeMenu={closeMenuOnTransition}
                       />
                       <li className={classes.menuItem}>
                           <NavLink to=""
                                 // onClick={closeMenuOnTransition}
                                    onClick={() => {
                                        const transitionPageScope = () => {
                                            closeMenuOnTransition()
                                        }
                                        transitionPageScope()
                                    }}
                           >Prices</NavLink>
                       </li>
                       <li className={classes.menuItem}>
                           <NavLink to="/contacts"
                                    onClick={() => {
                                        const transitionPageScope = () => {
                                            closeMenuOnTransition()
                                        }
                                        transitionPageScope()
                                    }}
                           >Contacts</NavLink>
                       </li>
                       <li className={classes.menuItem}>
                           <NavLink to="/accessories"
                                    onClick={() => {
                                        const transitionPageScope = () => {
                                            closeMenuOnTransition()
                                        }
                                        transitionPageScope()
                                    }}
                           >Cabinet</NavLink>
                       </li>
                       <li className={classes.menuItem}>
                           <Button className={classes.basketBtn}
                                   onClick={toggleBasket}
                           >
                               <BsBasket3  className={classes.basketIcon}/>
                           </Button>
                       </li>
                   </ul>
               </nav>
               <Button
                   className={classes.adaptBtn}
                   onClick={toggleMenu}>
                   <BurgerSlip
                       changeIcon={isClickedMenu}
                       // className={classes.dropedMenu}
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

   </>
    )
}