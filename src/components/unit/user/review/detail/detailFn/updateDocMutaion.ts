import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateData } from "../../../../../../commons/util/functions/firebase/update/updateData"

export const updateDocMutaionQuery = (docId:string)=>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async(data) => await updateData({collection:'/programReview',docId,data}),
        onSuccess:() => queryClient.invalidateQueries({queryKey: ['fetchProgramReview'],refetchType: 'all'},{ throwOnError:true })
    })

}