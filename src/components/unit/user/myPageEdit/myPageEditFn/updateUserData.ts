import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateUserApplyDatas } from "../../../../../commons/util/functions/firebase/update/updateUserApplyData"

export const updateUserDataMutation = (userUID:string[],docId:string)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (inputs)=> updateUserApplyDatas({docCollection:'user',userUID,middleCollection:'userData',docId},inputs),
        onSuccess:()=> queryClient.invalidateQueries({queryKey: ['userInfo'],refetchType: 'all'},{ throwOnError:true })
    })
}