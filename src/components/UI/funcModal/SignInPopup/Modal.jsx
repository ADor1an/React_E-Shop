import React, {Component, useState} from 'react';
import classes from './Modal.module.css';
import Button from "@mui/material/Button";
import {BsXCircle} from "react-icons/bs";

const Modal = props => {

    const cls = [
        classes.Modal,
    ]
    if (props.isOpen) {
        cls.push(classes.open)
    } else {
        // cls.push(classes.close)
    }


    return (
        <div className={cls.join(' ')}
        >
            <Button
                className={classes.closeModal}
                onClick={props.onClose}
            ><BsXCircle/>
            </Button>

            <main>
                {props.children}
            </main>


        </div>
    );
};

export default Modal;
