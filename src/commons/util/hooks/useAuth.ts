import { useEffect } from "react"
import { useIsLogInUser } from "./signUpIn"
import { useRouter } from "next/router"

export default function useAuth(){
    const router = useRouter()
    const isLogin = useIsLogInUser()
    useEffect(()=>{
        if(isLogin === false){
            alert("로그인이 필요한 서비스 입니다.")
            router.push('/joinus')
        }   
    },[])
}