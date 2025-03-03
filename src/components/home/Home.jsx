import React from "react";
import Banner from "../banner/Banner";
import style from "./Home.module.css";
import Filter from "../filter/Filter";
import Products from "../products/Products";

const Home = ()=>{
    return(
        <>
            <div className={style.homeContainer}>
                <Banner />
                <Filter />
                <Products />
            </div>    
        </>
    )
}

export default Home;