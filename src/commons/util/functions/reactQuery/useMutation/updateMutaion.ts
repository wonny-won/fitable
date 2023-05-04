import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { updateData } from "../../firebase/update/updateData" 
import { getOneDoc } from "../../firebase/read/getData"

export const updateMutation = (docId:string)=>{
    const queryClient = useQueryClient()
    const {data} = useQuery({
        queryKey: ['fetchProgramReview',docId],
        queryFn: ()=> getOneDoc({collection:'programReview',docId}),
    })

    const updateDocMutaion = useMutation({
        mutationFn: async(data) => await updateData({collection:'/programReview',docId,data}),
        onSuccess:()=>{
            queryClient.invalidateQueries('fetchProgramReview')
        }
    })

    return updateDocMutaion
}