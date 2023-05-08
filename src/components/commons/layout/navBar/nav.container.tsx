import { useEffect, useState } from "react"
import NavBarUI from "./nav.presenter"
import { NavContainerProps } from "./nav.type"
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { userlogOut } from "../../../../commons/util/functions/firebase/logInOut.ts/logOut"

export default function NavBar(props:NavContainerProps){
    const [isActive,setisActive] = useState(false)
    const [ isLogin,setIsLogin ] = useState(false)
    const routing = useRoutingPageHooks()
    const onClickMenuBt = ()=>{
        setisActive(!isActive)
    }
    useEffect(()=>{
        if(props.isLogin !== false){
            setIsLogin(props.isLogin)
        }
    },[isLogin])
    const signOut = ()=>{userlogOut()}

    return <NavBarUI isActive={isActive}
                     onClickMenuBt={onClickMenuBt}
                     isLogin={props.isLogin}
                     routing={routing}
                     signOut={signOut}/>
}