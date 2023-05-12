import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import classes from './PageTransition.modules.css'
import {CSSTransition, TransitionGroup} from "react-transition-group";

// import HomePage from "../../../pages/HomePage";
// import {About} from "../../../pages/About";
// import Products from "../../../pages/Products";
// import Accessories from "../../../pages/Accessories";
// import {Contacts} from "../../../pages/Contacts";
// import Monoblocks from "../../../pages/prdcts/Monoblocks";
// import MacPro from "../../../pages/prdcts/MacPro";
// import MacStudios from "../../../pages/prdcts/MacStudios";
// import MacMini from "../../../pages/prdcts/MacMini";
// import Displays from "../../../pages/prdcts/Displays";
// import Macbooks from "../../../pages/prdcts/Macbooks";

const PageTransition = ({basket, mMini, macPro, mStudio, monoblocks, macbooks, displays,addToBasket, children, isForward}) => {

    const location = useLocation()
    const timeout = {enter: 500, exit: 500}

    // const getClassNames = () => {
    //     const previousKey = sessionStorage.getItem('previousKey') || '/'
    //     const classNames = []
    //
    //     if (currentKey === previousKey) return ''
    //
    //     // currentKey < previousKey
    //     //     // ? classNames.push(`${classes.pageEnterLeft}`)
    //     //     // : classNames.push(`${classes.pageEnterRight}`)
    //     //     ? classNames.push(classes.pageEnterLeft)
    //     //     : classNames.push(classes.pageEnterRight)
    //
    //     if (currentKey < previousKey) {
    //         // classNames.push(classes.pageEnterLeft)
    //         classNames.push(`${classes.pageEnterLeft}`)
    //     }
    //     else {
    //         // classNames.push(classes.pageEnterRight)
    //         classNames.push(`${classes.pageEnterRight}`)
    //     }
    //
    //     return classNames.push(' ')
    // }

    const getClassNames = () => {
        const isForward = location.state?.direction === 'forward'
        return {
            enter: isForward ? classes.pageEnterRightEnter : classes.pageEnterLeftEnter,
            enterActive: isForward
                ? classes.pageEnterRightEnterActive
                : classes.pageEnterLeftEnterActive,
            exit: isForward ? classes.pageEnterRightExit : classes.pageEnterLeftExit,
            exitActive: isForward
                ? classes.pageEnterRightExitActive
                : classes.pageEnterLeftExitActive,

        }
    }
    // sessionStorage.setItem('previousKey', currentKey)

    return (

        <div className={classes.pageTransitionContainer}>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={timeout}
                    classNames={getClassNames()}
                    mountOnEnter={false}
                    unmountOnExit={true}

                >
                    {children}
                </CSSTransition>
            </TransitionGroup>
        </div>
    )

}

export default PageTransition;

