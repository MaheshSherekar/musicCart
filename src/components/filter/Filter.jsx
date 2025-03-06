import React from "react";
import style from "./Filter.module.css";
const Filter = ()=>{
    console.log("Banner Trigger");
    return(
        <>
            <div className={style.filter}>
                <input type="text" placeholder="Search Product"/>
                <div className={style.filterOptions}>
                    <div className={style.buttons}>
                        <button>List</button>
                        <button>Group</button>
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

export default React.memo(Filter);