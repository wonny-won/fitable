import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getSpecificDatas } from "../../../../../commons/util/functions/firebase/read/getSpecificDatas"

export const getMyReviewQuery = (fieldValue:string)=>{
    useQueryClient()
    const getMyReview = useQuery({
        queryKey: ['getMyReview'],
        queryFn: () =>  getSpecificDatas({collectionName:'/programReview',field:'userId',fieldValue}),
        // 필드값이 있을떄만 실행되도록하는 조건
        enabled: !!fieldValue
    })  
    
    return getMyReview
}