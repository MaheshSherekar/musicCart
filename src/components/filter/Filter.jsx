import React from "react";
import style from "./Filter.module.css";
import Data from "../data/Data";
const Filter = ({data})=>{

    const check = (e)=>{
        var t = e.target.value;
        const searchedData = Data.filter((val,index)=>{
            let companyName = val.companyName.toString();
            let productName = val.productName.toString();
            let color = val.color.toString();
            let price = val.price.toString();
            let type = val.type.toString();
            let result = companyName.match(new RegExp(t, "i")) || productName.match(new RegExp(t, "i")) || color.match(new RegExp(t, "i")) || price.match(new RegExp(t, "i")) || type.match(new RegExp(t, "i"));
            return result;
        })
        data.setSeacrhProduct([searchedData]);
    }
    return(
        <>
            <div className={style.filter}>
                <input type="text" placeholder="Search Product" onChange={(e)=>check(e)}/>
                <div className={style.filterOptions}>
                    <div className={style.buttons}>
                        <button onClick={()=>data.setIsList("list")}>List</button>
                        <button onClick={()=>data.setIsList("group")}>Group</button>
                    </div>
                    <div className={style.options}>
                        <select>
                            <option>Headphone type</option>
                            <option>Featured</option>
                            <option>In-ear headphone</option>
                            <option>On-ear headphone</option>
                            <option>Over-ear headphone</option>
                        </select>
                        <select>
                            <option>Company</option>
                            <option>Featured</option>
                            <option>JBL</option>
                            <option>Sony</option>
                            <option>Boat</option>
                            <option>Zebronics</option>
                            <option>Marshall</option>
                            <option>Ptron</option>
                        </select>
                        <select>
                            <option>Colour</option>
                            <option>Featured</option>
                            <option>Blue</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Brown</option>
                        </select>
                        <select>
                            <option>Price</option>
                            <option>Featured</option>
                            <option>₹0 - ₹1,000</option>
                            <option>₹1,000 - ₹10,000</option>
                            <option>₹10,000 - ₹20,000</option>
                        </select>
                    </div>
                    <div className={style.options}>
                        <select>
                            <option>Sort by : Featured</option>
                            <option>Featured</option>
                            <option>Price : Lowest</option>
                            <option>Price : Highest</option>
                            <option>Name : (A-Z)</option>
                            <option>Name : (Z-A)</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;