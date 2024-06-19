import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../../../../pages/_app"
import { signupValidation } from "../../validation"
import { addCustomIdDoc } from "./addCustomIdDocs"

interface JoinusParams {
    email : string;
    password : string;
    passwordCheck:string;
}

export const joinUsEmail =  async ({email,password,passwordCheck}:JoinusParams)=>{
    let userUID = ""
    const checkSignUpInputs = await signupValidation({email,password,passwordCheck})
    console.log(checkSignUpInputs)
    
    if(checkSignUpInputs && password.length>=6){
        try{
            const createUser =  createUserWithEmailAndPassword(auth ,email, password)
            // 회원가입 후 추가적인 유저데이터 넣어주기 - 안정성을 위해 기본 User info와 분리
            userUID = createUser?.user?.uid;
            const userData = {
                payment : 0,
                point : 0,
                coupon: 0,
                phoneNumber: ''
            }
            const userApplyProgram = {
                program:'신청 내역이 없습니다.',
                applyAt:'-',
            }
            addCustomIdDoc('user',userUID,'userData',userData)
            addCustomIdDoc('user',userUID,'userApplyProgram',userApplyProgram)
            return userUID
        } catch(error){
            console.log(error)
        }
    }else{
        alert('회원가입 조건을 충족해주세요!')
        return
    }
    return userUID
}
