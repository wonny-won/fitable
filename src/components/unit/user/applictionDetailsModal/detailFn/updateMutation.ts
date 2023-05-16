import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateUserApplyDatas } from "../../../../../commons/util/functions/firebase/update/updateUserApplyData"

export const updateApplyDataMutation = (userUID:string[],docId:string)=>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data) => updateUserApplyDatas({docCollection:'applyData',userUID,middleCollection:'applyProgram',docId},data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['applyData',userUID,docId],refetchType: 'all'},{ throwOnError:true })
    })
}