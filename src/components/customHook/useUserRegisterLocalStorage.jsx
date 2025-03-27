import React  from "react";

const useUserRegisterLocalStorage = (key, initialValue)=>{
    if(key == "register"){
        localStorage.setItem(key,  JSON.stringify(initialValue));
    }
    else if(key == "login"){
         
    }

}

export default useUserRegisterLocalStorage;