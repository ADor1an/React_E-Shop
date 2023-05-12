import {useEffect, useState} from "react";
import { Button } from "@mui/material";
import classes from "./BurgerSlip.module.css";
function BurgerSlip({ changeIcon }) {
    const [isExpanded, setIsExpanded] = useState(false);
    useEffect(() => {
        setIsExpanded(changeIcon)
    }, [changeIcon])
    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className={classes.wrap}>
            <Button className={`${classes.hamBox} ${classes.hamWrap}`}>
        <span
            className={`${classes.hamburger} ${
                isExpanded ? classes.open : ""
            } ${classes.hamSlip}`}
            onClick={handleClick}
            // onClick={() => {
            //     const someFunc = () => {
            //         handleClick
            //         toggleExpand
            //     }
            //     someFunc
            // }}
        >
          <span className={classes.hamInner}></span>
        </span>
            </Button>
        </div>
    );
}

export default BurgerSlip;

