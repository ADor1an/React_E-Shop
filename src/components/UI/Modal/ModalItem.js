import React, {Component} from 'react';
import classes from './ModalItem.module.css'
import Button from "@mui/material/Button";
import {BsXCircle} from "react-icons/bs";

export default class Modal extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {

        const { isOpen, onClose } = this.props
        const cls =[
            classes.Modal
        ]

        if (isOpen)
        {
            cls.push(classes.open)
        }   else {

        }

        return (

            <div className={cls.join(' ')}
            >
                <Button
                    className={classes.closeModal}
                    onClick={onClose}
                >
                    <BsXCircle/>
                </Button>
                {this.props.children}

            </div>

        )

    }

}
