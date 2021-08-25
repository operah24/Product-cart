import React, {useState} from 'react';
import classes from './Nav.module.css';
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../index.css';
const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(true);
    const [show, setShow] = useState(false);
    
    const handleClick = () => {
    if (toggleMenu) {
      setToggleMenu(false);
      setShow(true);
    } else {
      setToggleMenu(true);
      setShow(false);
    }
  };
  
    return (
        <div className={classes.nav}>
            <div className={classes.logo}>
                <img src="http://res.cloudinary.com/kayode/image/upload/v1591956770/vfuazmrjeb4kfogu239n.svg" alt="logo" width="40px" height="40px"/>
                <p>Zerohunger</p>
            </div>
            <ul className={classes.links} id={show ? "show-Menu" : "hide-Menu"}>
                <li>
                    <a href=" ">Home</a>
                </li>
                <li>
                    <a href=" ">About Us</a>
                </li>
                <li>
                    <a href=" ">Contact Us</a>
                </li>
            </ul>
            <div className={classes.others} id={show ? "show-Menu" : "hide-Menu"} >
               <input type="text" className={classes.search} placeholder="search" />
                <div className={classes.cart}>
                    <img src="https://res.cloudinary.com/kayode/image/upload/v1591273406/shopping-cart_xztvok.svg" alt="Shopping_Cart" className={classes.cartimg} width="30px" height="30px" ></img>
                    <span>0</span>
                </div>
                <div className={classes.btn}>
                    <button type="button">Login</button>
                    <button type="button">Signup</button>
                </div>
            </div>
            <FontAwesomeIcon icon={toggleMenu ? faBars : faTimes} onClick={handleClick} className={ classes.navicon}/>
        </div>
    )
}

export default Nav
