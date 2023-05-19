import { useEffect } from "react"
import { loggedInUser } from "../functions/firebase/read/getLogginUser"
import { useRoutingPageHooks } from "./routing"

export const useAuth = ()=>{
    const router = useRoutingPageHooks()
    useEffect(()=>{
        loggedInUser().then((res)=>{
            if(res.result==='로그인 하지 않은 유저입니다.'){
                alert('로그인이 필요한 서비스 입니다.')
                router('/joinus')()
            }
       })
    },[])
}