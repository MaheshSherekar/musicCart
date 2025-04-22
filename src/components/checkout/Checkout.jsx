import React, { useContext, useState } from "react";
import style from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";
import { UserLoginDetail } from "../context/UserAuth";
import { CheckoutDetail } from "../context/CheckoutContext";
import { ConfirmOrder } from "../context/ConfirmOrderContext";
import { CartDetail } from "../context/CartContext";
const Checkout = ()=>{
    const navigate = useNavigate();
    const {loginDetail} = useContext(UserLoginDetail)
    const {checkout, setCheckout} = useContext(CheckoutDetail)
    const [address, setAddress] = useState("");
    const [payment, setPayment] = useState("Mode of payment");
    const {setOrder} = useContext(ConfirmOrder)
    const {setCartDetail} = useContext(CartDetail)
    console.log(checkout)

    const checkAddress = (e)=>{
        setAddress(e.target.value);
    }
    const checkPayment = (e)=>{
        setPayment(e.target.value)
    }

    const confirmOrder = ()=>{
        if(address == ""){
            alert("Enter Address");
            return;
        }else if(payment == "Mode of payment"){
            alert("Select Payment Mode");
            return;
        }

        setOrder((prev)=>([...prev,{
            checkout,
            address,
            payment
        }]
        ))

        setCheckout({})
        setCartDetail([]);
        navigate("/congratulations");
    }
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
                                    <textarea placeholder="Entert Address" rows="6" onChange={(e)=>{checkAddress(e)}}></textarea>
                                </div>
                            </div>
                            <div className={style.paymentMethod}>
                                <div>
                                    <h4>2. Payment method</h4>
                                </div>
                                <div>
                                    <select name="payametMode" onChange={(e)=>{checkPayment(e)}}>
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
                                   <button type="button" onClick={confirmOrder}>Place your order</button><br />
                                   <p>By placing your order, you agree to Musicart privacy
                                   notice and conditions of use.</p>
                            </div>
                            <div className={style.orderSummaryDetails}>
                                   <h4>Order Summary</h4>
                                   <div className={style.orderSummary}>
                                        <p>Items :</p>
                                        <p>₹{checkout.grandTotal - 45 }</p>
                                   </div>
                                   <div className={style.orderSummary}>
                                        <p>Delivery :</p>
                                        <p>₹45.00</p>
                                   </div>
                                   <div className={style.orderSummary}>
                                        <p>Order Total :</p>
                                        <p>₹{checkout.grandTotal }</p>
                                   </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Checkout;