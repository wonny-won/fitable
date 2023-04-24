import { useState } from "react"

export const useIsEdit = ()=>{
    const [isEdit,setIsEdit] = useState(false)
    const onClickEdit = ()=>{
        setIsEdit(!isEdit)
    }
    return {
        isEdit,
        onClickEdit,
        setIsEdit
    }
}