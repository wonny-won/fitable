import { useState } from "react"

// 모달 열기 - 마이페이지
export const useOpenModal = ()=>{
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [applyId,setApplyId] = useState('')

    const onClickOpenModal = (e:any)=>{
        setIsModalOpen(!isModalOpen)
        setApplyId(e.target.id)
    }
    return {
        onClickOpenModal,
        applyId,
        isModalOpen,
        setIsModalOpen
    }

}