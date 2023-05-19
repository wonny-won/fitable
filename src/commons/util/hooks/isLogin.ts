import { useState } from "react"
import { loggedInUser } from "../functions/firebase/read/getLogginUser" 

export const useIsLogIn = ()=>{
    const [isLogin,setIsLogin] = useState('로그인 하지 않은 유저입니다.')
    loggedInUser().then((res)=>(setIsLogin(res.result)))
    return isLogin
}