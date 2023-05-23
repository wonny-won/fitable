import { useState } from "react"

export const useModalOpen = ()=>{
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [isNav,setIsNav] = useState(false)
    const onClickBt = ()=>{
        setIsModalOpen(true)
        setIsNav(true)
    }
    return {
        isModalOpen,
        isNav,
        setIsModalOpen,
        onClickBt
    }
}