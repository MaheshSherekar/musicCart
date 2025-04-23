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

    const value = confirmOrders.map((value, index) => {
        if (index === Number(indexValue)) {
            const obj = {
                address : value.address,
                payment : value.payment,
                grandtotal : value.checkout.grandTotal,
                details : value.checkout.cartDetail
            }
            return obj;
        }
        return null;
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
                                <label>{loginDetail.name}</label><br />
                                <textarea placeholder="Entert Address" rows="6"></textarea>
                            </div>
                        </div>
                        <div className={style.paymentMethod}>
                            <div>
                                <h4>2. Payment method</h4>
                            </div>
                            <div>
                                <select name="payametMode">
                                    <option>Mode of payment</option>
                                    <option>Pay on Delivery</option>
                                    <option>UPI</option>
                                    <option>Card</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.itemsDetail}>
                            <div>
                                <h4>3. Review items and delivery</h4>
                            </div>
                            <div>
                            {value.map((values, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <img src={value.checkout.cartDetail[0].asset} height="100" width="100" />
                                            <div>
                                                {value.checkout.cartDetail[0].productName} {value.checkout.cartDetail[0].companyName} <br />
                                                qty: {value.checkout.cartDetail[0].qty} &nbsp; color: {value.checkout.cartDetail[0].color}
                                            </div>
                                        </React.Fragment>
                                    );
                            })}

                                    <h5>
                                    Estimated delivery :<br />
                                    Monday — FREE Standard Delivery
                                </h5>
                            </div>
                        </div>
                        <div className={style.deliveryAddress}>
                            <div>
                                <button type="button">Place your order</button>
                            </div>
                            <div>
                                <h4> Order Total : ₹{5555555 }<br />
                                By placing your order, you agree to Musicart privacy notice and conditions of use.</h4>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightBox}>
                        <div className={style.placeButton}>
                                <button type="button" >Place your order</button><br />
                                <p>By placing your order, you agree to Musicart privacy
                                notice and conditions of use.</p>
                        </div>
                        <div className={style.orderSummaryDetails}>
                                <h4>Order Summary</h4>
                                <div className={style.orderSummary}>
                                    <p>Items :</p>
                                    <p>₹{55555 - 45 }</p>
                                </div>
                                <div className={style.orderSummary}>
                                    <p>Delivery :</p>
                                    <p>₹45.00</p>
                                </div>
                                <div className={style.orderSummary}>
                                    <p>Order Total :</p>
                                    <p>₹{5555555 }</p>
                                </div>
                        </div>
                    </div>
                </div>
          </div>
        </>
    )
}

export default InvoiceDetail