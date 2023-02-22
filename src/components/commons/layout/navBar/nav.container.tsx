import { useEffect, useState } from "react"
import NavBarUI from "./nav.presenter"
import { NavContainerProps } from "./nav.type"
import { logOut } from "../../../../commons/util/functions/firebaseFunctions"
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"

export default function NavBar(props:NavContainerProps){
    const [isActive,setisActive] = useState(false)
    const [ isLogin,setIsLogin ] = useState(false)
    const routing = useRoutingPageHooks()
    const onClickMenuBt = ()=>{
        setisActive(!isActive)
    }
    const signOut = ()=>{
        logOut()
    }
    useEffect(()=>{
        if(props.isLogin !== false){
            setIsLogin(props.isLogin)
        }
    },[isLogin])
    return <NavBarUI isActive={isActive}
                     onClickMenuBt={onClickMenuBt}
                     isLogin={props.isLogin}
                     signOut={signOut}
                     routing={routing}/>
}