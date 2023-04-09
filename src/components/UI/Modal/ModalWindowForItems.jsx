import React from 'react';
import classes from './ModalItem.module.css'
import Button from "@mui/material/Button";
import {BsXCircle} from "react-icons/bs";
import {Typography} from "@mui/material";

const Modal = ({
    show,
    closeModal,
    children
               }) => {
    const cls = [
        classes.Modal
    ]
    const clsTwo = [
        classes.overlay
    ]

    if (show) {
        cls.push(classes.open)
        clsTwo.push(classes.show)
    }
    return (
        <div className={clsTwo.join(' ')}
             // onClick={(e) => {
             //     closeModal();
             //     e.stopPropagation()
             // }}
        >
            <div className={cls.join(' ')}>
    {/*<div className={classes.overlay}>*/}
    {/*     <div className={classes.Modal}>*/}


                    {children}
                <Button className={classes.closeModal} onClick={closeModal}><BsXCircle/></Button>

            </div>


        </div>
    );
};

export default Modal;