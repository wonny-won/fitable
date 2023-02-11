import * as yup from 'yup'

//이메일,비밀번호 검증함수
export const checkEmail = (email:string)=>{
    if(!email.includes("@")){
        return false
    } 
}

//비밀번호 검증함수
export const passwordValidation = async (password:string)=>{
    // 숫자 포함 검증
    let schema = yup.string().matches(/(1|2|3|4|5|6|7|8|9|0)/)
    const result = await schema.isValid(password)
    console.log(result)
    return {
        result,
        schema
    }
}

// 비밀번호 일치검증 함수
export const checkPassword = (password:string,passwordCheck:string)=>{
    if(password!==passwordCheck){
        return false
    } 
}