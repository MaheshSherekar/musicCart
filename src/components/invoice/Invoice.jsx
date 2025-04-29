import React, { useContext } from "react";
import style from "./Invoice.module.css"
import { ConfirmOrder } from "../context/ConfirmOrderContext";
import { useNavigate } from "react-router-dom";
import { UserLoginDetail } from "../context/UserAuth";
const Invoice = ()=>{
    const {confirmOrders} = useContext(ConfirmOrder);
    const {loginDetail} = useContext(UserLoginDetail)
    const navigate = useNavigate();
    console.log(confirmOrders);
    const viewInvoice = (index)=>{
       navigate("/invoicedetail/"+index);
    }
    return(
        <>
            <div className={style.container}>
                <h1>My Invoices</h1>
                {confirmOrders.map((value,index)=>(
                    <div key={index}>
                        <div>
                            <label>{loginDetail.name}</label>
                            <p>{value.address}</p>
                        </div>
                        <div>
                            <button type="button" onClick={()=>{viewInvoice(index)}}>View Invoice</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Invoice;