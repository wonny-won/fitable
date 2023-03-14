import SignUpUI from "./signUp.presenter"
import { joinUsEmail } from "../../../../commons/util/functions/firebase/signUp";
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing";

export default function SignUp(){
    const { onChangeInput,inputs,numberBool,englishBool,passwordError,emailError } = useGetInputValue()
    const routing = useRoutingPageHooks()

    const onSubmit = async()=>{
        const result = await joinUsEmail(inputs)
        if(result) routing('/')()
    }
    return <SignUpUI onChangeInput={onChangeInput}
                     onSubmit={onSubmit}
                     emailError={emailError}
                     passwordError={passwordError}
                     signUpInput={inputs}
                     numberBool={numberBool}
                     englishBool={englishBool} />
}