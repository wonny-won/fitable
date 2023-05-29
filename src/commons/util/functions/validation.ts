import * as yup from 'yup'

//이메일 검증함수
export const checkEmail = async(email:string)=>{
    let schema = yup.string().email()
    const emailValidation = await schema.isValid(email)
    return email==='' ? false:emailValidation
}

//비밀번호 숫자 포함 검증함수
export const passwordValidation = async (password:string)=>{
    let schema = yup.string().matches(/(1|2|3|4|5|6|7|8|9|0)/)
    const number = await schema.isValid(password)
    return number
}
//비밀번호 영문자 포함 검증함수
export const passwordEnglishValidation = async (password:string)=>{
    // 받아온 비밀번호 모두 소문자로 변환후 검증
    const lowercasePassword = password.toLowerCase()
    let schema = yup.string().matches(/(q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m)/)
    const english = await schema.isValid(lowercasePassword)
    return english
}

// 비밀번호 일치검증 함수
export const checkPassword = (password:string,passwordCheck:string)=>{
    if(password!==passwordCheck){
        return false
    } 
}