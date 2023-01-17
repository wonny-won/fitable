import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"

// 로그인/회원가입 input 값 끌어오는 함수
export const getInputValue = ()=>{
    const [signUpInput, setSignUpInput] = useState({
        email: "",
        password: ""
    })
    const onChangeInput =(event:ChangeEvent<HTMLInputElement>)=>{
        const signUpInputKey = event.target.id
        setSignUpInput({...signUpInput, [signUpInputKey] :event.target.value})
    }
    return {
        onChangeInput,
        signUpInput
    }
}

// 이메일, 비밀번호 검증 함수
interface Validation {
    email : string;
    password : string;
    checkpassword : string
}

export const validation = ({email,password,checkpassword}:Validation)=>{
    return 
}