import SignUpUI from "./signUp.presenter"
import { joinUsEmail } from "../../../../commons/util/functions/firebaseFunctions";
import { getInputValue } from "../../../../commons/util/functions/signUpIn";


export default function SignUp(){
    const { onChangeInput,signUpInput } = getInputValue()
    const onSubmit = ()=>{
        joinUsEmail(signUpInput)
    }
    return <SignUpUI onChangeInput={onChangeInput}
                     onSubmit={onSubmit} />
}