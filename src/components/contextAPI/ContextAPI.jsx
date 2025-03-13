import React, { createContext, useEffect, useState } from "react"

export const addToCartContext = createContext();
const ContextAPI = (props)=>{
    console.log("Rendered")
    const [productData, setProductData] = useState();
    const [productData1, setProductData1] = useState([]);

    useEffect(()=>{
        setProductData1((prev)=>[...prev, productData])
    },[productData])
    
    console.log(productData1,"pryyyy")
    return(
        <>
            <addToCartContext.Provider value={{productData, setProductData}}>
                {props.children}
            </addToCartContext.Provider>
        </>
    )
}

export default React.memo(ContextAPI);