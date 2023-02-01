import { useState } from "react"
import NavBarUI from "./nav.presenter"
export default function NavBar(){
    const [isActive,setisActive] = useState(false)
    const onClickMenuBt = ()=>{
        setisActive(!isActive)
    }
    return <NavBarUI isActive={isActive}
                     onClickMenuBt={onClickMenuBt}/>
}