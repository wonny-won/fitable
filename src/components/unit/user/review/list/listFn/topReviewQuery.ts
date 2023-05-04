import { useQuery, useQueryClient } from "@tanstack/react-query"
import { topRanking } from "./topRanking"

export const topReviewQuery = ()=>{
    useQueryClient()

    return useQuery({
        queryKey:['topReview'],
        queryFn: ()=> topRanking()
    })
}