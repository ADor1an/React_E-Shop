import React, {useEffect} from 'react';
import Button from "@mui/material/Button";
import {BsXCircle} from "react-icons/bs";
import classes from '../../UI/funcModal/DModal.module.css'
import {Typography} from "@mui/material";
// import classes from '../../UI/testModal/MyModal.module.css'


const MyModal = ({
                 show,
                 closeModal,
                 children }) => {
    const cls = [
        classes.Modal
    ]
    // useEffect(() => {
//     console.log('Modal')
//     })

    // console.log(display)

    if (show) {
        cls.push(classes.open)
    } else {
        // cls.push(classes.close)
    }


    return (
        <div className={cls.join(' ')}>
            <div className={classes.ModalBody}>
              {children}

            </div>
            <Button className={classes.closeModal} onClick={closeModal}><BsXCircle/></Button>


        </div>
    );
}

export default MyModal;