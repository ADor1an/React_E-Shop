import React, {useState}  from 'react';
// import classes from "./BurgerMenu.module.css"

const BurgerMenu = () => {
    const [burger_class, setBurgerClass] = useState(`${classes.burger} ${classes.unCliked}`);
    const [menu_class, setMenuClass] = useState(`${classes.menu} ${classes.hidden}`);
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass(`${classes.burger} ${classes.clicked}`)
            setMenuClass(`${classes.menu} ${classes.visible}`)
        }   else {
            setBurgerClass(`${classes.burger} ${classes.uncliked}`)
            setMenuClass(`${classes.menu} ${classes.hidden}`)
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
            <div className={classes.wrap}>
                <nav>
                    <div className={classes.burgerMenu} onClick={updateMenu}>
                        <div className={burger_class}/>

                        <div className={burger_class}/>

                        <div className={burger_class}/>


                    </div>
                </nav>
                <div className={menu_class}>
                </div>
            </div>
        );
}

export default BurgerMenu;