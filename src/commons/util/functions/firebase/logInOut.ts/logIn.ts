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
        console.log(error)
    }
    return isLogin
}
