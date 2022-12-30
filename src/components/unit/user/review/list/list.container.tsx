import { useState } from "react"
import ReviewListUI from "./list.presenter"

export default function ReviewList(){
    const [isModalOpen,setIsModalOpen] = useState(false)
    const onClickOpenModal = ()=>{
        setIsModalOpen(true)
    }
    return <ReviewListUI onClickOpenModal={onClickOpenModal}
                         isModalOpen={isModalOpen}
                         setIsModalOpen={setIsModalOpen}/>
}