import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getOneDoc } from "../../../../../../commons/util/functions/firebase/read/getData"
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing"

export const fetchDetailDataQuery = (docId:string|undefined)=>{
    useQueryClient()
    const routingHooks = useRoutingPageHooks()

    const {status, data, error} = useQuery({
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
        error
    }
}