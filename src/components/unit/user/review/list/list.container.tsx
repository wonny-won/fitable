import { ChangeEvent, useEffect, useState } from "react"
import { getDatas } from "../../../../../commons/util/functions/firebaseFunctions"
import ReviewListUI from "./list.presenter"

export default function ReviewList(){
    const [data,setData] = useState<any[]>([])
    const [reviewId,setReviewId] = useState("")
    useEffect(()=>{
     getDatas("programReview").then((res)=>{setData(res)})
    },[])
    const [isModalOpen,setIsModalOpen] = useState(false)
    const onClickOpenModal = (event:ChangeEvent<HTMLDivElement>)=>{
        setIsModalOpen(true)
        setReviewId(event.currentTarget.id)
    }
    return <ReviewListUI onClickOpenModal={onClickOpenModal}
                         isModalOpen={isModalOpen}
                         setIsModalOpen={setIsModalOpen}
                         data={data}
                         reviewId={reviewId}/>
}