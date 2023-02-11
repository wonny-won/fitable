import SignUpUI from "./signUp.presenter"
import { joinUsEmail } from "../../../../commons/util/functions/firebaseFunctions";
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";
import { useState } from "react";
import { passwordValidation } from "../../../../commons/util/functions/validation";

export default function SignUp(){
    const { onChangeInput,signUpInput } = useGetInputValue()
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const schema = passwordValidation(signUpInput.password)
    const onSubmit = ()=>{
        const result = joinUsEmail(signUpInput)
        if(result.emailChek===false)setEmailError("이메일 형식이 아닙니다.")
        if(result.passwordcheck===false)setPasswordError("비밀번호가 다릅니다.")
    }
    return <SignUpUI onChangeInput={onChangeInput}
                     onSubmit={onSubmit}
                     emailError={emailError}
                     passwordError={passwordError}
                     signUpInput={signUpInput}
                     schema={schema} />
}