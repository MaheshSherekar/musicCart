import React, { useEffect, useState } from "react";

const useAddToCartLocalStorage = (key, initialValue)=>{
    if(key == "register"){
        let id = localStorage.getItem("userId");
        localStorage.setItem(key+id,  JSON.stringify(initialValue));
        localStorage.setItem("userId", Number(id)+1);
    }
 

}

export default useAddToCartLocalStorage;