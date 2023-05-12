import JoinUsUI from "./joinUs.presenter";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";

export default function JoinUs(){ 
    const routing = useRoutingPageHooks()
    const { onChangeInput,inputs } = useGetInputValue()
    return <JoinUsUI router={routing} 
                     onChangeInput={onChangeInput}
                     inputs={inputs}/>
}