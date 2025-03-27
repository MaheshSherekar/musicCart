import React, { useState } from "react";
import musicLogo from "../../assets/image 4.png";
import style from "./Register.module.css";
import {NavLink} from "react-router-dom";
import useUserRegisterLocalStorage from "../customHook/useUserRegisterLocalStorage";
const Register = ()=>{
    const [validate, setValidate] = useState({
        name : "",
        mobile : "",
        email : "",
        password : ""
    });
    const insertValues = (e)=>{
        let name = e.target.name;
        let val = e.target.value;
        setValidate((prev)=>(
            {...prev,[name] : val}
        ))
    }
    const submitData =()=>{      
        useUserRegisterLocalStorage("register", validate);
        setValidate({
            name : "",
            mobile : "",
            email : "",
            password : ""
        });
    }
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
                            <input type="text" name="name" value={validate.name} onChange={(e)=>insertValues(e)}/>
                        </div>
                        <div className={style.inputGroup}>
                            <label>Mobile number</label>
                            <input type="number" name="mobile" value={validate.mobile} onChange={(e)=>insertValues(e)}/>
                        </div>
                        <div className={style.inputGroup}>
                            <label>Email Id</label>
                            <input type="email" name="email" value={validate.email} onChange={(e)=>insertValues(e)}/>
                        </div>
                        <div className={style.inputGroup}>
                            <label>Password</label>
                            <input type="password" name="password" value={validate.password} onChange={(e)=>insertValues(e)}/>
                        </div>
                        <p>
                            By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.
                        </p>
                        <input type="button" value="Continue" onClick={()=>submitData()}/>
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