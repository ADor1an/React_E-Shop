import React, {Component} from 'react';
import {Button} from "@mui/material";
import classes from './BurgerSlip.module.css'

class BurgerSlip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    render() {
        const handleClick = event => {
            // 👇️ toggle class on click
            event.currentTarget.classList.toggle(`${classes.open}`);

            // 👇️ add class on click
            // event.currentTarget.classList.add('open');

            // 👇️ remove class on click
            // event.currentTarget.classList.remove('open');
        };
        return (
            <div className={classes.wrap}>
                <Button className={`${classes.hamBox} ${classes.hamWrap}`} >
                    <span className={`${classes.hamburger} ${classes.hamSlip}`} onClick={handleClick}>
                        <span className={classes.hamInner}>
                        </span>
                    </span>
                </Button>
            </div>
        );
    }
}











export default BurgerSlip;


// const BurgerSlip = props => {
//     return (
//         <div className={classes.wrap}>
//             <Button className={`${classes.hamBox} ${classes.hamWrap}`} >
//                 <span className={`${classes.hamburger} ${classes.hamSlip}`} onClick={handleClick}>
//                     <span className={classes.hamInner}>
//                     </span>
//                 </span>
//             </Button>
//         </div>
//     );
