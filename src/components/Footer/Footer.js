import React from 'react';
import classes from './Footer.module.css'
import {Typography} from "@mui/material";
import FooterNav from "./FooterNav";

const Footer = () => {
    // const cls = [
    //     classes.Footer
    // ]
    return (
      <footer className={classes.Footer}>

          <div className={classes.headerFooter}>
              <div className={classes.textFooter}>
                  <Typography>
                      Footer Content
                      <div className={classes.descFooter}>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptatibus.
                          </p>
                      </div>
                  </Typography>
              </div>
            <div className={classes.linksFooter}>
                <Typography>
                    Links
                    {/*<div className={classes.linksFooter}>*/}
                    {/*</div>*/}
                    <ul className={classes.listLinks}>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>About</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Accessories</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Products</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Contacts</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Order</a>
                        </li>
                    </ul>
                </Typography>

                <Typography>
                    Links
                    {/*<div className={classes.linksFooter}>*/}
                    {/*</div>*/}
                    <ul className={classes.listLinks}>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>About</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Accessories</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Products</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Contacts</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Order</a>
                        </li>
                    </ul>
                </Typography>

                <Typography>
                    Links
                    {/*<div className={classes.linksFooter}>*/}
                    {/*</div>*/}
                    <ul className={classes.listLinks}>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>About</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Accessories</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Products</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Contacts</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="" className={classes.link}>Order</a>
                        </li>
                    </ul>
                </Typography>
            </div>
          </div>

            <FooterNav/>
            <div className={classes.copyRight}>
                <Typography>
                    Все права защищены &copy;
                </Typography>
            </div>




      </footer>
    );
};

export default Footer;

