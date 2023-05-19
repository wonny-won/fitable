import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "firebase/auth"
import { auth } from "../../../../../../pages/_app"
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing"

export const updateMutation = ()=>{
    const queryClient = useQueryClient()
    const router = useRoutingPageHooks()
    return useMutation({
        mutationFn: (data:{photoURL?:string,displayName?:string})=> {
            const result = updateProfile(auth.currentUser,data)
            console.log(result)
            return result},
        onSuccess: ()=> { 
            queryClient.invalidateQueries({queryKey: ['userInfo'],refetchType: 'all'},{ throwOnError:true })
            router('/mypage')() 
        },
    })
}