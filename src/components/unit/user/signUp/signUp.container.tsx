import SignUpUI from "./signUp.presenter"
import { joinUsEmail } from "../../../../commons/util/functions/firebaseFunctions";
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";

export default function SignUp(){
    const { onChangeInput,signUpInput } = useGetInputValue()
    const onSubmit = ()=>{
        joinUsEmail(signUpInput)
    }
    return <SignUpUI onChangeInput={onChangeInput}
                     onSubmit={onSubmit} />
}