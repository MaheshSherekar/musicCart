import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Cart.module.css";
import { CartDetail } from "../context/CartContext";
const Cart = ()=>{
    const navigate = useNavigate();
    const {cartDetail, setCartDetail} = useContext(CartDetail)
  
    const ConvenienceFees = 45;
    const updateQty = (index, value) => {
        const updated = cartDetail.map((item, i) =>
            i === index ? { ...item, qty: parseInt(value) } : item
        );
        setCartDetail(updated);
    };
    console.log(cartDetail)
    
    const grandTotal = cartDetail.reduce((sum, item) => sum + item.price * item.qty, 0);
    return(
        <>
            <div className={style.container}>
                <button type="button" onClick={()=>navigate("/products")}>Back to Products</button>
                <h1> My Cart </h1>
                <div className={style.cartContainer}>
                    <div className={style.cartDetail}>
                        {cartDetail.map((cart,index)=>(
                            <div key={index}>
                                <div>
                                    <img src={cart.asset} height="100" width="100"/>
                                </div>
                                <div>
                                    <h5>{cart.companyName} {cart.productName}</h5>
                                    <h5>Color : {cart.color}</h5>
                                    <h5>In Stock</h5>
                                </div>
                                <div>
                                    <h5>Price</h5> 
                                    {cart.price} 
                                </div>
                                <div>
                                <h5>Quantity</h5>
                                    <select className="" onChange={(e) => updateQty(index, e.target.value)}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                    </select> 
                                </div>
                                <div>
                                <h5>Total</h5>
                                ₹{cart.price * cart.qty}
                                </div>
                            </div>
                        ))}
                        <hr />
                        <div>
                         <h4> {cartDetail.length} Items </h4>   <h4>₹{grandTotal}</h4>                          
                        </div>
                    </div>
                    <div className={style.priceDetails}>
                        <h5>PRICE DETAILS</h5>
                        <div id={style.priceDetail}>
                            <div>
                                <h5>Total MRP</h5>
                                <h5>₹{grandTotal}</h5>
                            </div>
                            <div>
                                <h5>Discount on MRP</h5>
                                <h5>₹{0}</h5>
                            </div>
                            <div>
                                <h5>Convenience Fee</h5>
                                <h5>₹{ConvenienceFees}</h5>
                            </div>
                            <div>
                                <h3>Total Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₹{grandTotal + ConvenienceFees}</h3>
                                <button type="button" >PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </>
    )
}

export default Cart;