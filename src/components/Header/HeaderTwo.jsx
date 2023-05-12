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
import PageTransitionRoutes from "./PageTransition/PageTransitionRoutes";
import PageTransition from "./PageTransition/PageTransition";
//pages

export default function HeaderTwo ({basket, mMini, macPro, mStudio, monoblocks, macbooks, displays,addToBasket, ...props}) {

    const [isClickedMenu, setIsClickedMenu] = useState(false)
    const [showBasket, setShowBasket] = useState(false)
    // const [count, setCount] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentKey, setCurrentKey] = useState('home');
    const location = useLocation();
    const isForward = location.state?.direction === 'forward';


    // useEffect(() => {
    //     const path = location.pathname;
    //     setCurrentKey(path === '/' ? 'home' : path.substr(1));
    // }, [location]);

    console.log(currentKey)

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
            currentKey: 'monoblocks',
            state: { direction: isForward ? 'back' : 'forward' }
            // exact
        },
        {path: '/prdcts/macpro',
            label: 'MacPro',
            currentKey: 'macpro',
            state: { direction: isForward ? 'back' : 'forward' }
            // exact
        },
        {path: '/prdcts/macstudios',
            label: 'MacStudios',
            currentKey: 'macstudios',
           state: { direction: isForward ? 'back' : 'forward' }
            // exact
        },
        {path: '/prdcts/macmini',
            label: 'Macmini',
            currentKey: 'macmini',
           state: { direction: isForward ? 'back' : 'forward' }
            // exact
        },
        {path: '/prdcts/displays',
            label: 'Monitors',
            currentKey: 'displays',
           state: { direction: isForward ? 'back' : 'forward' }
            // exact
        },
        {path: '/prdcts/macbooks',
            label: 'Macbooks',
            currentKey: 'macbooks',
            state: { direction: isForward ? 'back' : 'forward' }
            // label: 'MB Pro 16" intel',
            // exact
        },
    ]
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
    const timeout = { enter: 500, exit: 500 };


    return (
   <>
       <header>
           <div className={classes.headerWrapper}>
               <nav>
               <span className={classes.logo}>
                   <NavLink to="/"
                            onClick={() => {
                                const transitionPageScope = () => {
                                    closeMenuOnTransition()
                                    setCurrentKey('/')
                                }
                                transitionPageScope()
                            }}
                             state={{ direction: isForward ? 'back' : 'forward' }}
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
                                             setCurrentKey('about')
                                     }
                                     transitionPageScope()
                                 }}
                                    state={{ direction: isForward ? 'back' : 'forward' }}
                           >About</NavLink>
                       </li>
                       <Dropdown className={classes.menuItem}
                                 title='Products'
                                 links={links}
                                 closeMenu={closeMenuOnTransition}
                                 setCurrentKey={setCurrentKey}
                       />
                       <li className={classes.menuItem}>
                           <NavLink to=""
                                 // onClick={closeMenuOnTransition}
                                    onClick={() => {
                                        const transitionPageScope = () => {
                                            closeMenuOnTransition()
                                            setCurrentKey(' ')
                                        }
                                        transitionPageScope()
                                    }}
                                     state={{ direction: isForward ? 'back' : 'forward' }}
                           >Prices</NavLink>
                       </li>
                       <li className={classes.menuItem}>
                           <NavLink to="/contacts"
                                    onClick={() => {
                                        const transitionPageScope = () => {
                                            closeMenuOnTransition()
                                            setCurrentKey('contacts')
                                        }
                                        transitionPageScope()
                                    }}
                                     state={{ direction: isForward ? 'back' : 'forward' }}
                           >Contacts</NavLink>
                       </li>
                       <li className={classes.menuItem}>
                           <NavLink to="/accessories"
                                    onClick={() => {
                                        const transitionPageScope = () => {
                                            closeMenuOnTransition()
                                            setCurrentKey('accessories')
                                        }
                                        transitionPageScope()
                                    }}
                                    state={{ direction: isForward ? 'back' : 'forward' }}
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
                   onClick={toggleMenu}>
                   <BurgerSlip
                       changeIcon={isClickedMenu}
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

           <TransitionGroup>
               <CSSTransition
                   key={currentKey}
                   timeout={timeout}
                   classNames={{
                       enter: isForward ? classes.pageEnterRightEnter : classes.pageEnterLeftEnter,
                       enterActive: isForward ? classes.pageEnterRightEnterActive : classes.pageEnterLeftEnterActive,
                       exit: isForward ? classes.pageEnterRightExit : classes.pageEnterLeftExit,
                       exitActive: isForward ? classes.pageEnterRightExitActive : classes.pageEnterLeftExitActive,
                   }}
                   mountOnEnter={false}
                   unmountOnExit={true}
                   onEnter={() => console.log('enter')}
                   onExit={() => console.log('exit')}
               >
                   <Routes location={location}>
                       <Route path="/" element={<HomePage/>}/>
                       <Route path="/about" element={<About/>}/>
                       <Route path="/product" element={<Products/>}/>
                       <Route path="/accessories" element={<Accessories/>}/>
                       <Route path="/contacts" element={<Contacts/>}/>
                       <Route path="/prdcts/monoblocks" element={<Monoblocks
                           basket={basket}
                           monoblocks={monoblocks}
                           addToBasket={addToBasket}
                       />}/>
                       <Route path="/prdcts/macpro" element={<MacPro
                           basket={basket}
                           macPro={macPro}
                           addToBasket={addToBasket}
                       />}/>
                       <Route path="/prdcts/macstudios" element={<MacStudios
                           basket={basket}
                           mStudio={mStudio}
                           addToBasket={addToBasket}
                       />}/>
                       <Route path="/prdcts/macmini" element={<MacMini
                           basket={basket}
                           mMini={mMini}
                           addToBasket={addToBasket}
                       />}/>
                       <Route path="/prdcts/displays" element={<Displays
                           basket={basket}
                           displays={displays}
                           addToBasket={addToBasket}
                       />}/>
                       <Route path="/prdcts/macbooks" element={<Macbooks
                           basket={basket}
                           macbooks={macbooks}
                           addToBasket={addToBasket}
                       />}/>
                   </Routes>
               </CSSTransition>
           </TransitionGroup>


   </>
    )
}