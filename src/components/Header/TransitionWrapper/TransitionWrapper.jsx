import React from 'react';
// import classes from './TransitionWrapper.module.css'
import './TransitionWrapper.css'
// import {useLocation} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

const TransitionWrapper = ({children, direction}) => {
    // const location = useLocation()
    // const classNames = {
    //     enter: styles[`carousel-transition-${direction}__enter`],
    //     enterActive: styles[`carousel-transition-${direction}__enter-active`],
    //     exit: styles[`carousel-transition-${direction}__exit`],
    //     exitActive: styles[`carousel-transition-${direction}__exit-active`],
    // };

    return (
        <CSSTransition
            in={true}
            timeout={500}
            classNames={`carousel-transition-${direction}`}
            mountOnEnter
            unmountOnExit
        >
            {children}
        </CSSTransition>
    );
};

export default TransitionWrapper ;