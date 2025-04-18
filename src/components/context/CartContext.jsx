import React, { createContext, useState } from "react";
export const CartDetail = createContext();
const CartContext = (props)=>{
    const [cartDetail, setCartDetail] = useState([]);
    console.log(cartDetail, "cartDetail, setCartDetail")
    return(
        <CartDetail.Provider value={{cartDetail, setCartDetail}}>
            {props.children}
        </CartDetail.Provider>
    )
}

export default CartContext;