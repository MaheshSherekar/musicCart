import React, { useState } from "react";
import style from "./Filter.module.css";
import Data from "../data/Data";
const Filter = ({data})=>{
    const [existType, setExistType] = useState("");
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
        let searchedData;
  
        if(data.seacrhProduct.length <=0 ){
            searchedData = Data.filter((val)=>{
                let result;
                if(status != "prise"){
                    let companyName = val.companyName.toString();
                    let productName = val.productName.toString();
                    let color = val.color.toString();
                    let type = val.type.toString();
                    result = companyName.match(new RegExp(value, "i")) || productName.match(new RegExp(value, "i")) || color.match(new RegExp(value, "i")) || type.match(new RegExp(value, "i"));
                }
                else{
                    let prise = val.price;
                    if(value == "0"){
                        result =  prise >= value && prise < 1000;
                    }else if(value == "1000"){
                        result =  prise >= value && prise < 10000;
                    }else{
                        result =  prise >= value;
                    }
                }
                return result;
            })
            data.setSeacrhProduct(searchedData);
            setExistType(searchedData);
            return;
        };

        if(status == "type"){
            searchedData = Data.filter((val,index)=>{
                let type = val.type.toString();
                let result = type.match(new RegExp(value, "i"));
                return result;
            })

            data.seacrhProduct.filter((val,id)=>{
                existType == val.type ? val.type = searchedData : data.setSeacrhProduct(searchedData);
            })
            setExistType(searchedData)
        }
        else if(status == "company"){
            searchedData = Data.filter((val,index)=>{
                let companyName = val.companyName.toString();
                let result = companyName.match(new RegExp(value, "i"));
                return result;
            })

            data.seacrhProduct.filter((val,id)=>{
                existType == val.type ? val.companyName = searchedData : data.setSeacrhProduct(searchedData);
            })
            setExistType(searchedData)
        }
        else if(status == "color"){
            searchedData = Data.filter((val,index)=>{
                let color = val.color.toString();
                let result = color.match(new RegExp(value, "i"));
                return result;
            })

            data.seacrhProduct.filter((val,id)=>{
                existType == val.type ? val.color = searchedData : data.setSeacrhProduct(searchedData);
            })
            setExistType(searchedData)
        } 
        else if(status == "prise"){
            searchedData = Data.filter((val,index)=>{
                let prise = val.price;
                let result;
                if(value == "0"){
                    result =  prise >= value && prise < 1000;
                }else if(value == "1000"){
                    result =  prise >= value && prise < 10000;
                }else{
                    result =  prise >= value;
                }
                
                return result;
            })

            data.seacrhProduct.filter((val,id)=>{
                existType == val.price ? val.price = searchedData : data.setSeacrhProduct(searchedData);
            })
            setExistType(searchedData)
        }        
        
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
                        <select onChange={(e)=>searchType(e,"prise")}>
                            <option value="">Price</option>
                            <option value="">Featured</option>
                            <option value="0">₹0 - ₹1,000</option>
                            <option value="1000">₹1,000 - ₹10,000</option>
                            <option value="10000">₹10,000 - ₹20,000</option>
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