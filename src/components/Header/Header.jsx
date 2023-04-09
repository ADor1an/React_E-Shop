import React, {Fragment, useState} from 'react';
import {Typography} from "@mui/material";
import {Route, Link, Routes} from 'react-router-dom'
import {BsBasket3, BsXCircle} from "react-icons/bs";
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";


import classes from './Header.module.css'
import Button from "@mui/material/Button";
import Basket from "./Basket/Basket";
import Dropdown from "../UI/Dropdown/Dropdown";
import BurgerSlip from "./BurgerSlip/BurgerSlip";


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
// import {Routes} from "react-router";





export default function Header ({basket, mMini, macPro, mStudio, monoblocs, macbooks, displays,addToBasket, ...props}) {

    const [list_menu, setListMenu] = useState(`${classes.menuList} ${classes.unclicked}`)
    const [active_button, setACMenu] = useState(`${classes.dropedMenu} ${classes.notActivated}`)
    const [isClickedMenu, setIsClickedMenu] = useState(false)
    const [showBasket, setShowBasket] = useState(false)
    const [count, setCount] = useState(0)
    // const [orders, setOrders] = useState([])
    // const {basket} = props.basket
    {/*basket, mMini, macPro, mStudio, monobloks, macbooks, displays*/}

    const links = [
        {path: '/prdcts/monoblocks',
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

        if (!isClickedMenu) {
            setListMenu(`${classes.menuList} ${classes.clicked} `)
            setACMenu(`${classes.dropedMenu} ${classes.activated}`)
            document.body.style.overflowY = 'hidden'
        }   else {
            setListMenu(`${classes.menuList} ${classes.unclicked} `)
            setACMenu(`${classes.dropedMenu} ${classes.notActivated}`)
            document.body.style.overflowY = 'scroll'

        }
        setIsClickedMenu(!isClickedMenu)
        // console.log('clicked is done')
    }
    const toggleBasket = () => {
        // this.setState({showBasket: true})
        // console.log('show')
        setShowBasket(!showBasket )
        // document.body.style.overflowY = 'hidden'
        if (!showBasket) {
            document.body.style.overflowY = 'hidden'

        } else  {
            document.body.style.overflowY = 'unset'

        }
    }


    return (
   <>
       <header>
           <div className={classes.headerWrapper}>
               <nav>
               <span className={classes.logo}>
{/*SM staff*/}
                   <Link to="/">
                        SM staff
                   </Link>
               </span>
                   <ul
                       className={list_menu}
                   >
                       <li className={classes.menuItem}>
                           <Link to="/about">About</Link>
                       </li>
                       <li className={`${classes.menuItem} ${classes.dropdown}`}>
                           <Link className={classes.menuLink} data-toggle="dropdown" to="/products">Products</Link>
                           <div className={classes.dropdownMenu}>
                               <a href="" className={classes.dropdownLink}>MB M2 </a>
                               <a href="" className={classes.dropdownLink}>MBPro M1 pro</a>
                               <a href="" className={classes.dropdownLink}>MBPro M1 max</a>
                               <a href="" className={classes.dropdownLink}>MB M1 </a>
                               <a href="" className={classes.dropdownLink}>MBPro 13" M1</a>
                               <a href="" className={classes.dropdownLink}>MBPro 16" intel </a>
                               <a href="" className={classes.dropdownLink}>MBPro 15" intel </a>
                               <a href="" className={classes.dropdownLink}>MBPro 13" intel </a>
                               <a href="" className={classes.dropdownLink}>MBAir 13" intel</a>
                           </div>
                       </li>
                       <Dropdown title='Dropdown' links={links}/>
                       <li className={classes.menuItem}>
                           <Link to="">Prices</Link>
                       </li>
                       <li className={classes.menuItem}>
                           <Link to="/contacts">Contacts</Link>
                       </li>
                       <li className={classes.menuItem}>
                           <Link to="/accessories">Cabinet</Link>
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
                   className={classes.dropedMenu}
                   // className={active_button}
                   onClick={toggleMenu}>
                   <BurgerSlip/>
               </Button>
           </div>
           {showBasket &&
           <Basket
               basket={basket}
               show={showBasket}
               closeBasket={toggleBasket}
               // children={children}
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