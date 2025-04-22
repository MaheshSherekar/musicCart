import React, { useContext } from "react";
import style from "./Invoice.module.css"
import { ConfirmOrder } from "../context/ConfirmOrderContext";
const Invoice = ()=>{
    const {confirmOrders} = useContext(ConfirmOrder)
    console.log(confirmOrders);
    return(
        <>
            <div className={style.container}>
                <h1>My Invoices</h1>
               
            </div>
        </>
    )
}

export default Invoice;