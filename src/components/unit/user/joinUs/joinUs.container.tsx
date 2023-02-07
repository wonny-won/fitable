import JoinUsUI from "./joinUs.presenter";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";
import {  logIn } from "../../../../commons/util/functions/firebaseFunctions";
import { useCheckEmail } from "../../../../commons/util/hooks/validation";

export default function JoinUs(){ 
    const routing = useRoutingPageHooks()
    const { onChangeInput,signUpInput } = useGetInputValue()
    const onClickLogIn = async ()=>{
        await logIn(signUpInput)
        useCheckEmail(signUpInput.email)
        routing('/')()
    }
    return <JoinUsUI router={routing} 
                     onClickLogIn={onClickLogIn}
                     onChangeInput={onChangeInput}/>
}