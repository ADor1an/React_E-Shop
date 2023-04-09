import React from 'react';
import classes from "./FooterNav.module.css";
import {BsFacebook, BsInstagram, BsTelegram, BsTwitter, BsYoutube} from "react-icons/bs";
import {Button} from "@mui/material";

const FooterNav = () => {



        return (
            <div className={classes.footerNav}>
                <div className={classes.links}>
                    <Button href="" className={`${classes.instagram} ${classes.link}`}>
                        <BsInstagram className={classes.icon}/>
                    </Button>

                    <Button href="" className={`${classes.twitter} ${classes.link}`}>
                        <BsTwitter className={classes.icon}/>
                    </Button>

                    <Button href="" className={`${classes.youtube}  ${classes.link}`}>
                        <BsYoutube className={classes.icon}/>
                    </Button>

                    <Button href="" className={`${classes.telegram}  ${classes.link}`}>
                        <BsTelegram className={classes.icon}/>
                    </Button>

                    <Button href="" className={`${classes.facebook}  ${classes.link}`}>
                        <BsFacebook className={classes.icon}/>
                    </Button>

                </div>

            </div>
        );

}

export default FooterNav;