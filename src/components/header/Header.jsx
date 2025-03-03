import React from "react";
import style from './Header.module.css';
import musicIcon from "../../assets/image 4.png";
import {NavLink} from "react-router-dom";
const Header = ()=>{
    return(
        <>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={musicIcon}/>
                    <h1>Musiccart</h1>
                    <NavLink to="/">Home</NavLink>
                </div>
            </div>
        </>
    )
}

export default Header;