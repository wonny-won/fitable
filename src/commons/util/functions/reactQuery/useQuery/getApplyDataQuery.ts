import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getOneApplyData,Params } from "../../firebase/read/getOneApplyData"


export const getApplyDataQuery = ({docCollection,userUID,middleCollection,docId}:Params) =>{
    useQueryClient()

    const applyData = useQuery({
        queryKey: ['applyData',userUID,docId],
        queryFn: ()=>getOneApplyData({docCollection,userUID,middleCollection,docId}),
        retry: 5
    })    
    return applyData
}
