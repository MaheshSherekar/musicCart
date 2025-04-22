import React, { createContext, useState } from "react";


export const ConfirmOrder = createContext();
const ConfirmOrderContext = ({children})=>{
    const [confirmOrders, setOrder] = useState([]);
    console.log(confirmOrders,"confirmOrder")
    return(
        <ConfirmOrder.Provider value={{confirmOrders, setOrder}}>
            {children}
        </ConfirmOrder.Provider>
    )
}

export default ConfirmOrderContext;