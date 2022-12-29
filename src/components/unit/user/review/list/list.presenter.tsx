import { getDatas } from "../../../../../commons/util/functions/firebaseFunctions"
import { useEffect } from "react"

export default function ReviewListUI(){
    useEffect(()=>{
        getDatas("programReview")
    },[])

    return(
        <>
        리스트
        </>
    )
}