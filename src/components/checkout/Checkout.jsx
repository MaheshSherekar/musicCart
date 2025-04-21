import React, { useContext } from "react";
import style from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";
import { UserLoginDetail } from "../context/UserAuth";
import { CheckoutDetail } from "../context/CheckoutContext";
const Checkout = ()=>{
    const navigate = useNavigate();
    const {loginDetail} = useContext(UserLoginDetail)
    const {checkout} = useContext(CheckoutDetail)
    console.log(checkout)
    return(
        <>
             <div className={style.container}>
             <button type="button" onClick={()=>navigate("/cart")}>Back to Cart</button>
                <h1>Checkout</h1>
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
                                    {checkout.cartDetail.map((value,index)=>(
                                        <>
                                            <img src={value.asset} height="100" width="100"/>
                                            <div>
                                                {value.productName} // {value.companyName} <br />
                                                qty : {value.qty} // color : {value.color}
                                            </div>
                                        </>
                                    ))}
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
                                   <h4> Order Total : ₹{checkout.grandTotal }<br />
                                    By placing your order, you agree to Musicart privacy notice and conditions of use.</h4>
                                </div>
                            </div>
                        </div>
                        <div className={style.rightBox}>
                            <div className={style.placeButton}>
                                   <button type="button">Place your order</button><br />
                                   <p>By placing your order, you agree to Musicart privacy
                                   notice and conditions of use.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Checkout;