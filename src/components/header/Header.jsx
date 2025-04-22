import React, { useContext } from "react";
import style from './Header.module.css';
import musicIcon from "../../assets/image 4.png";
import {NavLink, useNavigate} from "react-router-dom";
import { UserLoginDetail } from "../context/UserAuth";
const Header = ()=>{

    const navigate = useNavigate()
     const {loginDetail,setLoginDetail} = useContext(UserLoginDetail)
    
    const isLoggedIn = loginDetail && Object.keys(loginDetail).length > 0;
    return(
        <>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={musicIcon}/>
                    <h1>Musiccart</h1>
                    <NavLink to="/">Home</NavLink>
                    {isLoggedIn && (
                        <>
                            / <NavLink to="/invoice">Invoice</NavLink>
                        </>
                    )}
                    
                </div>
                <div className={style.viewCart}>
                   {isLoggedIn && (
                        <>
                            <button type="button" onClick={()=>{navigate("/cart")}}>View Cart</button>  
                        </>
                    )}                  
                </div>
            </div>
        </>
    )
}

export default Header;