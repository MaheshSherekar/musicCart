import React, { createContext, useState } from "react";
export const CheckoutDetail = createContext();
const CheckoutContext = ({children})=>{
    const [checkout, setCheckout] = useState({});
    console.log(checkout)
    return(
        <CheckoutDetail.Provider value={{checkout, setCheckout}}>
            {children}
        </CheckoutDetail.Provider>
    )
}

export default CheckoutContext;