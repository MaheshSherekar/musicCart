import React from "react";
import style from "./Banner.module.css";
import bannerGirl from "../../assets/image 5.png"
const Banner = ()=>{
    return(
        <>
            <div className={style.banner}>
                <h1>Grab upto 50% off on<br />
                Selected headphones</h1>
                <img src={bannerGirl}/>
            </div>
        </>
    )
}

export default Banner;