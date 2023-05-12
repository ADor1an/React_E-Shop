import React, {useEffect} from 'react';
import Button from "@mui/material/Button";
import {BsXCircle} from "react-icons/bs";
// import classes from './FunctionalProductPopup.module.css'
import classes from './FunctionalProductPopupSecond.module.css'
import {Typography} from "@mui/material";


const Modal = ({
                 show,
                 closeModal,
                 children }) => {
    // const cls = [
    //     classes.Modal
    // ]




    return (
        <div className={`${classes.Modal}  ${show ? classes.open : classes.close} `}>
            <div className={classes.ModalBody}>
              {children}

            </div>
            <Button className={classes.closeModal} onClick={closeModal}><BsXCircle/></Button>


        </div>
    );
}

export default Modal;