import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, DB } from "../../../../../../pages/_app"
import { checkEmail, checkPassword, passwordEnglishValidation, passwordValidation } from "../../validation"
import { addCustomIdDoc } from "./addCustomIdDocs"

interface JoinusParams {
    email : string;
    password : string;
    passwordCheck:string;
}

export const joinUsEmail = async ({email,password,passwordCheck}:JoinusParams)=>{
    const emailChek = checkEmail(email)
    const passwordcheck = checkPassword(password,passwordCheck)
    const includesNumber = await passwordValidation(password)
    const IncludesEnglish = await passwordEnglishValidation(password)
    let userUID = ""
    if(emailChek!==false&&passwordcheck!==false&&includesNumber&&IncludesEnglish){
        try{
            const createUser = await createUserWithEmailAndPassword(auth ,email, password)
            // 회원가입 후 추가적인 유저데이터 넣어주기 - 안정성을 위해 기본 User info와 분리
            userUID = createUser.user.uid;
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
            await addCustomIdDoc('user',userUID,'userData',userData)
            await addCustomIdDoc('user',userUID,'userApplyProgram',userApplyProgram)
            alert("회원가입을 축하드립니다.")
            return userUID
        } catch(error){
            console.log(error)
        }
    }
    return userUID
}
