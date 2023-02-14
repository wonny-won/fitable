import SignUpUI from "./signUp.presenter"
import { joinUsEmail } from "../../../../commons/util/functions/firebaseFunctions";
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing";

export default function SignUp(){
    const { onChangeInput,signUpInput,numberBool,englishBool,passwordError,emailError } = useGetInputValue()
    const routing = useRoutingPageHooks()

    const onSubmit = async()=>{
        const result = await joinUsEmail(signUpInput)
        if(result) routing('/')()
    }
    return <SignUpUI onChangeInput={onChangeInput}
                     onSubmit={onSubmit}
                     emailError={emailError}
                     passwordError={passwordError}
                     signUpInput={signUpInput}
                     numberBool={numberBool}
                     englishBool={englishBool} />
}