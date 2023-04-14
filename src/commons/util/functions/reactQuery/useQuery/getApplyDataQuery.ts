import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getData } from "../../firebase/read/getDoc"

export const getApplyDataQuery = (docId:string) =>{
    useQueryClient()

    const applyData = useQuery({
        queryKey: ['applyData',docId],
        queryFn: ()=>getData({docCollection:'applyData',docId}),
        retry: 3
    })
    
    return applyData
}
