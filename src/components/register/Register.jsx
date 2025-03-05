import React from "react";
import musicLogo from "../../assets/image 4.png";
import style from "./Register.module.css";
import {NavLink} from "react-router-dom";
const Register = ()=>{
    return(
        <>
            <div className={style.container}>
                <div className={style.musicLogo}>
                    <img src={musicLogo} /> <h3>Musiccart</h3>
                </div>
                <div className={style.formContainer}>
                    <form action="#" method="post">
                        <h2>Create Account</h2>
                        <div className={style.inputGroup}>
                            <label>Your name</label>
                            <input type="text"/>
                        </div>
                        <div className={style.inputGroup}>
                            <label>Mobile number</label>
                            <input type="number"/>
                        </div>
                        <div className={style.inputGroup}>
                            <label>Email Id</label>
                            <input type="email"/>
                        </div>
                        <div className={style.inputGroup}>
                            <label>Password</label>
                            <input type="password"/>
                        </div>
                        <p>
                            By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.
                        </p>
                        <input type="button" value="Continue"/>
                        <p>By continuing, you agree to Musicart privacy notice and conditions of use.</p>
                    </form>
                </div>
                <div className={style.newUser}>
                    <p>Already have an account? <NavLink to="/login">Sign in</NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Register;