import React from "react";
import style from './Congratulations.module.css';
import congratulations from "../../assets/congratulations.png"
import { useNavigate } from "react-router-dom";
const Congratulations = ()=>{
    const navigate = useNavigate();
    return(
        <>
            <div className={style.container}>
                <img src={congratulations} />
                <h4>Order is placed successfully!</h4>
                <p>You will be receiving a confirmation email with order details</p>
                <button type="button" onClick={()=>navigate("/")}>Go back to Home page</button>
            </div>
        </>
    )
}

export default Congratulations;