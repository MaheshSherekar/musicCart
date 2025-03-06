import React from "react";
import style from "./Products.module.css";
import Data from "../data/Data.js";
import { useNavigate } from "react-router-dom";
import Filter from "../filter/Filter.jsx";

const Products = ()=>{
    const navigate = useNavigate();
    return(
        <> 
            <div className={style.Container}>
                <Filter />
                {Data.map((val,index)=>(
                      <div className={style.box} key={index} onClick={()=>{navigate("/product/"+val.id)}}>
                        <div className={style.boxImage}>
                            <img src={val.asset} />
                        </div>
                        <div className={style.boxCaption}>
                            <h4>{val.companyName} {val.productName}</h4>
                            <h4>Price - {val.price}</h4>
                            <h4>{val.color} {val.type}</h4>
                        </div>
                      </div>  
                ))}
            </div>
        </>
    )
}

export default Products;