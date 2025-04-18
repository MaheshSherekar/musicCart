import React, { useCallback, useContext, useState } from "react";
import style from "./Product.module.css";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Data from "../data/Data";
import { UserLoginDetail } from "../context/UserAuth";
import { CartDetail } from "../context/CartContext";


const Product = ()=>{
    const {id} = useParams();
    const {loginDetail} = useContext(UserLoginDetail)
    const isLogin = Object.keys(loginDetail).length > 0 ? true : false;
    const navigate = useNavigate();
    const {setCartDetail} = useContext(CartDetail);
    const [popupData, setpopupData] = useState("")
    
    const data = Data.filter((val)=>{
        return val.id == id;
    })   

    const addToCart = () => {
        if (isLogin) {
            const selectedProduct = data[0]; // since filter returns an array
    
            setCartDetail((prev) => {
                const isAlreadyInCart = prev.some(item => item.id === selectedProduct.id);
                if (isAlreadyInCart) {
                    setpopupData("Already Product Added !!")
                    return prev; // Do not add if already present
                }
                setpopupData("Product Added !!")
                return [...prev, {...selectedProduct, qty : 1}]; // Add if not present
            });
            showPopup();
        } else {
            navigate("/login");
        }
    }

    const buyNow = ()=>{
        if (isLogin) {
            const selectedProduct = data[0]; // since filter returns an array
    
            setCartDetail((prev) => {
                const isAlreadyInCart = prev.some(item => item.id === selectedProduct.id);
                if (isAlreadyInCart) {
                    return prev; // Do not add if already present
                }
                return [...prev, {...selectedProduct, qty : 1}]; // Add if not present
            });
            navigate("/cart");
        } else {
            navigate("/login");
        }
    }
    

    const showPopup = ()=>{
        var c = style.showPopup;
        document.getElementById(c).style.display="flex";
    }

    const closePopup = ()=>{
        var c = style.showPopup;
        document.getElementById(c).style.display="none";
    }

    return(
        <>
            <div className={style.container}>
                <button type="button" onClick={()=>navigate("/products")}>Back to products</button>
                
                    { data.length>=1 ? data.map((val,index)=>(
                        <div key={val.index}>
                                <p className={style.productDescription}>
                                {val.productName}, Wireless {val.type} Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones ({val.color})
                            </p>
                            <div className={style.productDetail}>
                                <img src={val.asset} />
                                <div className={style.productCaption}>
                                    <h1>{val.productName}</h1>
                                    <p><b>Price - ₹ {val.price}</b></p>
                                    <p>{val.color} | {val.type}</p>
                                    <p>
                                        About this item
                                        Sony’s lightest Wireless Noise-cancelling headband
                                            ever
                                        Up to 50-hour battery life with quick charging (3 min
                                            charge for up to 1 hour of playback)
                                        Multi-Point Connection helps to pair with two
                                            Bluetooth devices at the same time
                                        Take noise cancelling to the next level with Sony’s
                                            Integrated Processor V1,so you can fully immerse
                                            yourself in the music
                                        Super comfortable and lightweight design
                                            ( 192 Grams )
                                        High sound quality and well-balanced sound tuning
                                    </p>
                                    <p><b>Available - In stock</b></p>
                                    <p><b>Brand - {val.companyName}</b></p>
                                   
                                    <button type="button" className={style.addToCart} onClick={addToCart}>Add to cart</button>
                                    <button type="button" className={style.buyNow} onClick={buyNow}>Buy Now</button>                                   
                                </div>
                            </div> 
                        </div>
                    )) : "No Data Found"}
                <div id={style.showPopup}>
                    <h3>{popupData} </h3><br />
                    <div id={style.closePopup} onClick={closePopup}>CLOSE</div>
                </div>
            </div>
        </>
    )
}

export default Product;