import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getOneDoc } from "../../../../../../commons/util/functions/firebase/read/getData"

export const fetchDetailDataQuery = (docId:string)=>{
    useQueryClient()

    const fetchData = useQuery({
        queryKey: ['fetchProgramReview',docId],
        queryFn: ()=> getOneDoc({collection:'programReview',docId}),
        retry: 5
    })
    return fetchData
}