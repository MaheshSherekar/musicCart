import React, { useCallback, useContext, useState } from "react";
import style from "./Product.module.css";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../data/Data";



const Product = ()=>{
    const {id} = useParams();

    const useNavigates = useNavigate();
    
    const data = Data.filter((val)=>{
        return val.id == id;
    })   


    return(
        <>
            <div className={style.container}>
                <button type="button" onClick={()=>useNavigates("/products")}>Back to products</button>
                
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
                                    <button type="button" className={style.addToCart}>Add to cart</button>
                                    <button type="button" className={style.buyNow}>Buy Now</button>
                                </div>
                            </div> 
                        </div>
                    )) : "No Data Found"}
                

            </div>
        </>
    )
}

export default Product;