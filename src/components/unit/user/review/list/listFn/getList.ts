import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getDatas } from "../../../../../../commons/util/functions/firebase/read/getAllDatas"
import { topRanking } from "./topRanking"

export const getListQuery = (page:number)=>{
    useQueryClient()

    const {data,refetch} = useQuery({
        queryKey: ['getListQuery',page],
        queryFn: ()=> getDatas('/programReview',page),
        keepPreviousData: true,
    })

    const topReview = useQuery({
        queryKey:['topReview'],
        queryFn: ()=> topRanking()
    })

    return {
        data,
        refetch,
        topReview
    }
}