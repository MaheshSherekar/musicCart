import React, { useContext } from "react";
import style from "./Topbar.module.css";
import Header from "../header/Header";
import {NavLink} from "react-router-dom";
import { UserLoginDetail } from "../context/UserAuth";

const Topbar = ()=>{
   const {loginDetail,setLoginDetail} = useContext(UserLoginDetail)

   const isLoggedIn = loginDetail && Object.keys(loginDetail).length > 0;

    const logout = ()=>{
        setLoginDetail({});
    }
   console.log(loginDetail)
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
                    { !isLoggedIn ? (
                        <>
                            <NavLink to="/login">Login</NavLink> |{" "}
                            <NavLink to="/register">Signup</NavLink>
                        </>
                        ) : (
                        <button onClick={logout}>Logout</button>
                    )}
                    
                </p>
                    
                        
                   
                </div>
            </div>

            <Header />
        </>
    )
}

export default Topbar;