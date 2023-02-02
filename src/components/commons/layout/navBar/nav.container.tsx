import { useState } from "react"
import NavBarUI from "./nav.presenter"
import { NavContainerProps } from "./nav.type"

export default function NavBar(props:NavContainerProps){
    const [isActive,setisActive] = useState(false)
    const onClickMenuBt = ()=>{
        setisActive(!isActive)
    }
    return <NavBarUI isActive={isActive}
                     onClickMenuBt={onClickMenuBt}
                     isLogin={props.isLogin}/>
}