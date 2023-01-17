import JoinUsUI from "./joinUs.presenter";
import { RoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { getInputValue } from "../../../../commons/util/functions/signUpIn";
import { logIn } from "../../../../commons/util/functions/firebaseFunctions";

export default function JoinUs(){
    const routing = RoutingPageHooks()
    const { onChangeInput,signUpInput } = getInputValue()
    const onClickLogIn = ()=>{
        logIn(signUpInput)
    }

    return <JoinUsUI router={routing} 
                     onClickLogIn={onClickLogIn}
                     onChangeInput={onChangeInput}/>
}