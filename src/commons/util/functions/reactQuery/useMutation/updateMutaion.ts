import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateData } from "../../firebase/update/updateData" 

export const updateMutation = (docId:string)=>{
    const queryClient = useQueryClient()
    const updateDocMutaion = useMutation({
        mutationFn: async(data) => await updateData({collection:'/programReview',docId,data}),
        onSuccess:()=>{
            queryClient.invalidateQueries(['fetchProgramReview'])
        }
    })

    return updateDocMutaion
}