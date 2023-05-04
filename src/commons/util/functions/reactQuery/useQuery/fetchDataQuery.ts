import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getOneDoc } from "../../firebase/read/getData" 
import { useRoutingPageHooks } from "../../../hooks/routing" 

export const fetchDetailDataQuery = (docId:string|undefined)=>{
    useQueryClient()
    const routingHooks = useRoutingPageHooks()

    const {status, data, error,refetch} = useQuery({
        queryKey: ['fetchProgramReview',docId],
        queryFn: ()=> getOneDoc({collection:'programReview',docId}),
        onError:()=>{
            routingHooks('/mypage')()
        },
        retry: 5
    })
    return {
        status,
        data,
        error,
        refetch
    }
}