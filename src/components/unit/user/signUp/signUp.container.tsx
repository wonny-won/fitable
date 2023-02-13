import SignUpUI from "./signUp.presenter"
import { joinUsEmail } from "../../../../commons/util/functions/firebaseFunctions";
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";
import { useState } from "react";

export default function SignUp(){
    const { onChangeInput,signUpInput,numberBool,englishBool,passwordError,emailError } = useGetInputValue()
    const onSubmit = ()=>{
        joinUsEmail(signUpInput)
    }
    return <SignUpUI onChangeInput={onChangeInput}
                     onSubmit={onSubmit}
                     emailError={emailError}
                     passwordError={passwordError}
                     signUpInput={signUpInput}
                     numberBool={numberBool}
                     englishBool={englishBool} />
}