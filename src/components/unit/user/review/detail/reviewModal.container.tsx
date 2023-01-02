import ReviewModalDetailUI from "./reviewModal.presenter"
import { getData } from "../../../../../commons/util/functions/firebaseFunctions"
import { useEffect, useState } from "react"
import { ReviewModalContainer } from "./reviewModal.type"

export default function ReviewModalDetail(props:ReviewModalContainer){
    const [ data,setData ] = useState({})
    useEffect(()=>{
       getData({docCollection:"programReview",docId:props.reviewId}).then((res:any)=>{
        console.log(res)
        setData(res)
       })
    },[props.reviewId])
    return <ReviewModalDetailUI data={data}/>
}