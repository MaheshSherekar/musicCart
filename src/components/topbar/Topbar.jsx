import React from "react";
import style from "./Topbar.module.css";
import Header from "../header/Header";
import {NavLink} from "react-router-dom";
const Topbar = ()=>{
    return(
        <>
            <div className={style.container}>
                <div>
                    <p><i></i>912121131313</p>
                </div>
                <div>
                    <p>Get 50% off on selected items | Shop Now</p>
                </div>
                <div>
                    <p>
                        <NavLink to="/login">Login</NavLink> |
                        <NavLink to="/register">Signup</NavLink>
                    </p>
                </div>
            </div>

            <Header />
        </>
    )
}

export default Topbar;