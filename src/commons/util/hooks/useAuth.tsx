import { useEffect } from "react"
import { useIsLogInUser } from "./signUpIn"
import { useRoutingPageHooks } from "./routing"

export default function UseAuth(){
    const isLogin = useIsLogInUser()
    console.log(isLogin)
    useEffect(()=>{
        if(isLogin === false){
            alert("로그인이 필요한 서비스 입니다.")
        }   
        useRoutingPageHooks()('/joinus') 

    },[])
}