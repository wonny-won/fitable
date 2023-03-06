import { useEffect, useState } from "react"
import { useIsLogInUser } from "./signUpIn"
import { useRouter } from "next/router"
import { isLoggedin } from "../recoilAtom/atom"
import { useRecoilState } from "recoil"

export default function useAuth(){
    // const router = useRouter()
    const isLoginUser = useIsLogInUser()
    console.log(isLoginUser)
    useEffect(()=>{
        console.log("useEffect안",isLoginUser)
        if(!isLoginUser){
            alert("로그인이 필요한 서비스 입니다.")
            // router.push('/joinus')
        }   
    },[isLoginUser])
}