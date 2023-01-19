import JoinUsUI from "./joinUs.presenter";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";
import { loggedInUser, logIn } from "../../../../commons/util/functions/firebaseFunctions";
import { useRecoilState } from "recoil";
import { accessToken } from "../../../../commons/util/recoilAtom/atom";
import { auth } from "../../../../../pages/_app";

export default function JoinUs(){
    const islogin = loggedInUser()
    console.log(islogin)
  
    const [token,setToken] = useRecoilState(accessToken)
    const routing = useRoutingPageHooks()
    const { onChangeInput,signUpInput } = useGetInputValue()
    const onClickLogIn = async ()=>{
        const result = await logIn(signUpInput)
        const accessToken = result?.user?.accessToken
        if(accessToken !== null||undefined||''){
            setToken(accessToken)
            localStorage.setItem("accessToken",accessToken)
        }
        routing('/')()
    }
    return <JoinUsUI router={routing} 
                     onClickLogIn={onClickLogIn}
                     onChangeInput={onChangeInput}/>
}