import { signInWithEmailAndPassword } from "firebase/auth";
import { checkEmail } from "../../validation"
import { auth } from "../../../../../../pages/_app";

interface JoinusParams {
    email: string;
    password: string;
    passwordCheck:string;
}

export const logIn = async ({email,password}:JoinusParams)=>{
    let isLogin = false
    try{
        checkEmail(email)
        const result = await signInWithEmailAndPassword(auth ,email, password)
        result.operationType==="signIn" ? isLogin=true : isLogin=false
    }catch(error){
        alert('비밀번호 또는 아이디를 확인해주세요.')
    }
    return isLogin
}
