import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteOneDoc } from "../../firebase/delete/deleteOneDoc"

export const daleteMutation = (docId:string)=>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ()=> deleteOneDoc(docId),
        onSuccess:()=>{
            return queryClient.invalidateQueries({queryKey: ['getMyReview'],refetchType: 'all'},{ throwOnError:true })
        }
    })
}