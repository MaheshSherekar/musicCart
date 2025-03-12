import React, { useEffect, useState } from "react";
import style from "./Filter.module.css";
import Data from "../data/Data";
const Filter = ({data})=>{
    const [existType, setExistType] = useState({});

    const search = (e)=>{
        var value = e.target.value;
        const searchedData = Data.filter((val,index)=>{
            let companyName = val.companyName.toString();
            let productName = val.productName.toString();
            let color = val.color.toString();
            let price = val.price.toString();
            let type = val.type.toString();
            let result = companyName.match(new RegExp(value, "i")) || productName.match(new RegExp(value, "i")) ||
                color.match(new RegExp(value, "i")) || price == value || type.match(new RegExp(value, "i"));
            return result;
        })
        data.setSeacrhProduct(searchedData);
    }

    const searchType = (e,status)=>{
        let value = e.target.value;
        setExistType((prev)=>({...prev, [status] : value}));          
    }

    useEffect(()=>{
        const searchedData = Data.filter((val,index)=>{
            let companyName = val.companyName.toString();
            let color = val.color.toString();
            let type = val.type.toString();
            let price = val.price;
            let result;
            
            let checkPrice = existType.price === "0" && (price >= 0 && price < 1000) || existType.price === "1000" && (price >= 1000 && price < 10000)
            || existType.price === "10000" && (price >= 10000) ;

            result =  checkPrice || existType.company  && (companyName == existType.company) || existType.color  && (color == existType.color) || existType.type  && (type == existType.type);
           
            return result;
        })
        data.setSeacrhProduct(searchedData);
    },[existType]);

    const searchSort = (e)=>{
        let value = e.target.value;
        let result;
        let sortDate = [...Data];
        if(value == "Lowest"){
            result = sortDate.sort((a,b)=>{
                return a.price - b.price;
            })
        }
        else if(value == "Highest"){
            result = sortDate.sort((a,b)=>{
                return b.price - a.price;
            })
        }
        else if(value == "A-Z"){
            result = sortDate.sort((a,b)=>{
                return a.companyName.localeCompare(b.companyName);
            })
        }
        else if(value == "Z-A"){
            result = sortDate.sort((a,b)=>{
                return b.companyName.localeCompare(a.companyName);
            })
        }else{
            
        }
        data.setSeacrhProduct(result);
    }
    
    return(
        <>
            <div className={style.filter}>
                <input type="text" placeholder="Search Product" onChange={(e)=>search(e)}/>
                <div className={style.filterOptions}>
                    <div className={style.buttons}>
                        <button onClick={()=>data.setIsList("list")}>List</button>
                        <button onClick={()=>data.setIsList("group")}>Group</button>
                    </div>
                    <div className={style.options}>
                        <select onChange={(e)=>searchType(e,"type")}>
                            <option>Headphone type</option>
                            <option>Featured</option>
                            <option>In-ear headphone</option>
                            <option>On-ear headphone</option>
                            <option>Over-ear headphone</option>
                        </select>
                        <select onChange={(e)=>searchType(e,"company")}>
                            <option>Company</option>
                            <option>Featured</option>
                            <option>JBL</option>
                            <option>Sony</option>
                            <option>Boat</option>
                            <option>Zebronics</option>
                            <option>Marshall</option>
                            <option>Ptron</option>
                        </select>
                        <select onChange={(e)=>searchType(e,"color")}>
                            <option>Colour</option>
                            <option>Featured</option>
                            <option>Blue</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Brown</option>
                        </select>
                        <select onChange={(e)=>searchType(e,"price")}>
                            <option value="">Price</option>
                            <option value="">Featured</option>
                            <option value="0">₹0 - ₹1,000</option>
                            <option value="1000">₹1,000 - ₹10,000</option>
                            <option value="10000">₹10,000 - ₹20,000</option>
                        </select>
                    </div>
                    <div className={style.options}>
                        <select onChange={(e)=>searchSort(e)}>
                            <option>Sort by : Featured</option>
                            <option>Featured</option>
                            <option value="Lowest">Price : Lowest</option>
                            <option value="Highest">Price : Highest</option>
                            <option value="A-Z">Name : (A-Z)</option>
                            <option value="Z-A">Name : (Z-A)</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter;