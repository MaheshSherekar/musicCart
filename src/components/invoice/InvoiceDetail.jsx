import React, { useContext } from "react";
import style from "./InvoiceDetail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { UserLoginDetail } from "../context/UserAuth";
import { ConfirmOrder } from "../context/ConfirmOrderContext";

const InvoiceDetail = ()=>{
    const {index} = useParams();
    const indexValue = index;
    const navigate = useNavigate();
    const {loginDetail} = useContext(UserLoginDetail)
    const {confirmOrders} = useContext(ConfirmOrder)
    console.log(confirmOrders)

    const value = confirmOrders.filter((values, index) => {
        if (index === Number(indexValue)) {
            // const obj = {
            //     address : value.address,
            //     payment : value.payment,
            //     grandtotal : value.checkout.grandTotal,
            //     details : value.checkout.cartDetail
            // }
            return values;
        }
        //return null;
    })

    console.log(value,"va")

    return(
        <>
          <div className={style.container}>
            <button type="button" onClick={()=>navigate("/cart")}>Back to Cart</button>
            <h1>Invoice</h1>
             <div className={style.checkoutContainer}>
                    <div className={style.leftBox}>
                        <div className={style.deliveryAddress}>
                            <div>
                                <h4>1. Delivery Address</h4>
                            </div>
                            <div>
                                <label>{loginDetail.name}</label><br /><br />
                                {value[0].address}
                                
                            </div>
                        </div>
                        <div className={style.paymentMethod}>
                            <div>
                                <h4>2. Payment method</h4>
                            </div>
                            <div>
                                <input type="text" value={value[0].payment} readOnly />
                            </div>
                        </div>
                        <div className={style.itemsDetail}>
                            <div>
                                <h4>3. Review items and delivery</h4>
                            </div>
                            <div>
                            {value[0].checkout.cartDetail.map((values, index) => (
                                <>
                                    <img src={values.asset} height="50" width="50" />
                                    <p>{values.companyName} &nbsp; &nbsp; {values.productName} &nbsp; &nbsp; color - {values.color}</p>
                                </>
                                   
                            ))}

                                    <h5>
                                    Estimated delivery :<br />
                                    Monday — FREE Standard Delivery
                                </h5>
                            </div>
                        </div>
                      
                    </div>
                    <div className={style.rightBox}>
                     
                        <div className={style.orderSummaryDetails}>
                                <h4>Order Summary</h4>
                                <div className={style.orderSummary}>
                                    <p>Items :</p>
                                    <p>₹{value[0].checkout.grandTotal - 45}</p>
                                </div>
                                <div className={style.orderSummary}>
                                    <p>Delivery :</p>
                                    <p>₹45.00</p>
                                </div>
                                <div className={style.orderSummary}>
                                    <p>Order Total :</p>
                                    <p>₹{value[0].checkout.grandTotal }</p>
                                </div>
                        </div>
                    </div>
                </div>
          </div>
        </>
    )
}

export default InvoiceDetail