import { useState } from "react"

export const useIsActive = ()=>{
    const [isActive,setisActive] = useState(false)
    const onClickMenuBt = ()=>{
        setisActive(!isActive)
    }
    return {
        isActive,
        onClickMenuBt
    }
}