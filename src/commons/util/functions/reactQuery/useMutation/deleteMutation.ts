import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteOneDoc } from "../../firebase/delete/deleteOneDoc"

export const daleteMutation = ()=>{
    const queryClient = useQueryClient()

    const result =  useMutation({
        mutationFn: (docId:string)=> deleteOneDoc(docId),
        onSuccess:()=> queryClient.invalidateQueries({queryKey: ['getMyReview'],refetchType: 'all'},{ throwOnError:true })
    })
    return result
}