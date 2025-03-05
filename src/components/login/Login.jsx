import React from "react";
import musicLogo from "../../assets/image 4.png";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const navigate = useNavigate();
    return(
        <>
            <div className={style.container}>
                <div className={style.musicLogo}>
                    <img src={musicLogo} /> <h3>Musiccart</h3>
                </div>
                <div className={style.formContainer}>
                    <form action="#" method="post">
                        <h2>Sign in</h2>
                        <div className={style.inputGroup}>
                            <label>Enter your email or mobile number</label>
                            <input type="text" required/>
                        </div>
                        <div className={style.inputGroup}>
                            <label>Password</label>
                            <input type="password" required/>
                        </div>
                        <input type="button" value="Continue"/>
                        <p>By continuing, you agree to Musicart privacy notice and conditions of use.</p>
                    </form>
                </div>
                <div className={style.newUser}>
                    <p>--------- New to Musicart? ----------</p>
                    <button type="button" onClick={()=>navigate("/register")}>Create your Musicart account</button>
                </div>
            </div>
        </>
    )
}

export default Login;