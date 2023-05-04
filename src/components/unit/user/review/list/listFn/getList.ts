import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getDatas } from "../../../../../../commons/util/functions/firebase/read/getAllDatas"
import { topRanking } from "./topRanking"

export const getListQuery = ()=>{
    useQueryClient()

    const getRivewList = useQuery({
        queryKey: ['getListQuery'],
        queryFn: ()=> getDatas('/programReview')
    })

    const topReview = useQuery({
        queryKey:['topReview'],
        queryFn: ()=> topRanking()
    })

    return {
        getRivewList,
        topReview
    }
}