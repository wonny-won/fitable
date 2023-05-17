import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "firebase/auth"
import { auth } from "../../../../../../pages/_app"
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing"

export const updateMutation = ()=>{
    const queryClient = useQueryClient()
    const router = useRoutingPageHooks()
    return useMutation({
        mutationFn: (data:{photoURL?:string,displayName?:string})=> updateProfile(auth.currentUser,data),
        onSuccess: ()=>{
            router('/mypage')()
            return queryClient.invalidateQueries({queryKey: ['userInfo'],refetchType: 'all'},{ throwOnError:true })
        }
    })
}