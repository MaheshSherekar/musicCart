import React, { useEffect, useState } from "react";

const useLoginStatus = (status, value)=>{
    let obj = {
        isLogin: status,
        details: value
    }

    console.log(obj)
    return obj;
}

export default useLoginStatus;