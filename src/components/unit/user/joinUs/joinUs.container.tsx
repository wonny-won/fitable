import JoinUsUI from "./joinUs.presenter";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";
import {  logIn } from "../../../../commons/util/functions/firebaseFunctions";

export default function JoinUs(){ 
    const routing = useRoutingPageHooks()
    const { onChangeInput,signUpInput } = useGetInputValue()
    const onClickLogIn = async()=>{
        const isLogin = await logIn(signUpInput)
        if(isLogin) routing('/')()

    }
    return <JoinUsUI router={routing} 
                     onClickLogIn={onClickLogIn}
                     onChangeInput={onChangeInput}/>
}