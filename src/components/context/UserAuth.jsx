import React, { createContext, useState } from "react";


export const UserLoginDetail = createContext();
const UserAuth = ({children})=>{
const [loginDetail, setLoginDetail] = useState({})

console.log(loginDetail)
    return(
    <UserLoginDetail.Provider value={{loginDetail, setLoginDetail}}>
        {children}
    </UserLoginDetail.Provider>
    )
}

export default UserAuth;