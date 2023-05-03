import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getSpecificDatas } from "../../../../../commons/util/functions/firebase/read/getSpecificDatas"

export const getMyReviewQuery = (fieldValue:string)=>{
    console.log(fieldValue)
    useQueryClient()
    const getMyReview = useQuery({
        queryKey: ['getMyReview',fieldValue],
        queryFn: () => {if(!fieldValue) getSpecificDatas({collectionName:'/programReview',field:'userId',fieldValue:`${fieldValue}`})},
        retry:5
    })  
    
    return getMyReview
}