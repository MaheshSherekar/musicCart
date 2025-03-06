import React from "react";
import Banner from "../banner/Banner";
import style from "./Home.module.css";
import Products from "../products/Products";

const Home = ()=>{
    return(
        <>
            <div className={style.homeContainer}>
                <Banner />
                <Products />
            </div>    
        </>
    )
}

export default Home;