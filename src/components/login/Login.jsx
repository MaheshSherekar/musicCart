import React from "react";
import musicLogo from "../../assets/image 4.png";
import style from "./Login.module.css";
const Login = ()=>{
    return(
        <>
            <div className={style.container}>
                <div className={style.musicLogo}>
                    <img src={musicLogo} /> <h3>Musiccart</h3>
                </div>
            </div>
        </>
    )
}

export default Login;