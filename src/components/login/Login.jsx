import React, { useState } from "react";
import musicLogo from "../../assets/image 4.png";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const navigate = useNavigate();
    const [validate, setValidate] = useState({
        email : '',
        password : ''
    });
    const [error, setError] = useState({
        email : '',
        password : ''
    });

    const setValue = (e)=>{
        let name  = e.target.name;
        let val  = e.target.value;
        setValidate({...validate, [name] : val});
    }
    const checkData = ()=>{
        let status = true;
        let formData = {};
        if(validate.email == ""){
            formData.email = "Enter Email"; 
            status = false;  
        }

        if(validate.password == ""){
            formData.password = "Enter Password"; 
            status = false;
        }

        setError(formData);
        return status;
       
    }

    const submitData = ()=>{
        if(!checkData()) return;
        
        console.log(validate)
        setError({
            email : '',
            password : ''
        })
        setValidate({
            email : '',
            password : ''
        })
    }
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
                            <input type="text" name="email" value={validate.email} onChange={(e)=>setValue(e)}/>
                            <p>{error.email}</p>
                        </div>
                        <div className={style.inputGroup}>
                            <label>Password</label>
                            <input type="password" name="password" value={validate.password} onChange={(e)=>setValue(e)}/>
                            <p>{error.password}</p>
                        </div>
                        <input type="button" value="Continue" onClick={()=>{submitData()}}/>
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