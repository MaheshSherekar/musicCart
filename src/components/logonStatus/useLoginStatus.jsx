import React, { useEffect, useState } from "react";

const useLoginStatus = (status, value)=>{
    
    const [login, setLogin] = useState(localStorage.getItem("login"));
    
    useEffect(()=>{
        setLogin(()=>localStorage.setItem("login", [JSON.stringify(value), status]))
    },status)
    
    console.log(login,"login")
    
    return login;
}

export default useLoginStatus;