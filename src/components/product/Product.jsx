import React from "react";
import style from "./Product.module.css";
import { useParams } from "react-router-dom";
import Data from "../data/Data";
const Product = ()=>{
    const {id} = useParams();
    const data = Data.filter((val)=>{
        return val.id === id;
    })
    console.log(data)
    return(
        <>
            <div className={style.container}>
                <button type="button">Back to products</button>
                <div>
                    <p className={style.productDescription}>
                        Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)
                    </p>
                    <div className={style.productDetail}>
                        <img src="" />
                        <div className={style.productCaption}>
                            <h1>Sony WH-CH720N</h1>
                            <p><b>Price - ₹ 3,500</b></p>
                            <p>Black | Over-ear headphone</p>
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
                            <p><b>Brand - Sony</b></p>
                            <button type="button" className={style.addToCart}>Add to cart</button>
                            <button type="button" className={style.buyNow}>Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product;