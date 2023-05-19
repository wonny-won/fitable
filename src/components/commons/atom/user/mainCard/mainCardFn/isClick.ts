import { useState } from "react"

export const useIsClick = ()=>{
    const [isClick,setIsClick]=useState(false)
    const onClickRotateCard = ()=>{
        setIsClick(!isClick)
    }


    return {
        isClick,
        onClickRotateCard
    }
}