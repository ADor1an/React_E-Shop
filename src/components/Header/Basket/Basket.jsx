import React, {Component} from 'react';
import classes from './Basket.module.css';
import {Typography} from "@mui/material";
import {BsXCircle} from "react-icons/bs";
import Button from "@mui/material/Button";


const Basket = ({
                    basket,
                    show,
                    closeBasket,
                    children }) =>  {

    const cls = [
        classes.basket
    ]
    if (show) {
        cls.push(classes.open)
    } else {
        // cls.push(classes.close)
    }

    return (
        <div className={cls.join(' ')} >
            <div className={classes.body}>
                {children}
            </div>
            <Button onClick={closeBasket} className={classes.hide}><BsXCircle/></Button>
        </div>
    );
}

export default Basket;