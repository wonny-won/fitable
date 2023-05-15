import SignUpUI from "./signUp.presenter"
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";
import { submitjoinUs } from "./signUpFn/submit";

export default function SignUp(){
    const { onChangeInput,inputs,numberBool,englishBool,passwordError,emailError } = useGetInputValue()
    const onClickSubmit = submitjoinUs(inputs)
    return <SignUpUI onChangeInput={onChangeInput}
                     onSubmit={onClickSubmit}
                     emailError={emailError}
                     passwordError={passwordError}
                     signUpInput={inputs}
                     numberBool={numberBool}
                     englishBool={englishBool} />
}