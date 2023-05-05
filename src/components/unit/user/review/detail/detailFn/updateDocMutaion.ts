import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateData } from "../../../../../../commons/util/functions/firebase/update/updateData"

export const updateDocMutaionQuery = (docId:string)=>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async(data) => await updateData({collection:'/programReview',docId,data}),
        onSuccess:()=>{
            console.log('이제 이게 실행 될거야')
            return queryClient.invalidateQueries({queryKey: ['fetchProgramReview'],refetchType: 'all'},{ throwOnError:true })
        }
    })

}