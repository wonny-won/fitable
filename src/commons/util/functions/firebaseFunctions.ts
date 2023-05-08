import { DB } from "../../../../pages/_app";
import { collection,
         addDoc,
         getDocs,
         doc,
         getDoc,
         updateDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged } from 'firebase/auth'
import 'firebase/compat/auth'
import { auth } from "../../../../pages/_app";
import { checkEmail,checkPassword, passwordValidation,passwordEnglishValidation } from "./validation";
import { useRecoilState } from "recoil";
// ----------------------------------- 타입존 ----------------------------- //

interface JoinusParams {
    email : string;
    password : string;
    passwordCheck:string;
}

// ----------------------------------- 함수존 ----------------------------- //


// 기존 회원 로그인
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

// 현재 로그인한 사용자 가지고 오기
export const  loggedInUser =async ()=>{
    const result = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              if(user.uid) resolve(user.reloadUserInfo)
            } else {
                reject("로그인 하지 않은 유저입니다.")
            }
          });
    })
    return result
}
export const logOut = async ()=>{
    try{
        const result = await signOut(auth)
        alert("로그아웃에 성공했습니다.")
        console.log(result)
    }catch(error){
        console.log(error)
    }
}


