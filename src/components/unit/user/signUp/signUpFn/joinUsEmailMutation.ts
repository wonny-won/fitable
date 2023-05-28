import { useMutation } from "@tanstack/react-query"
import { joinUsEmail } from "../../../../../commons/util/functions/firebase/create/signUp"
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing"

export const joinUsEmailMutation = (inputs:any)=>{
    const routing = useRoutingPageHooks()
    return useMutation({
        mutationFn: async()=>{ 
            await joinUsEmail(inputs)
            alert('회원가입을 축하드립니다.')
            return '회원가입 완료'
        },
        onSuccess: (data)=>{
            if(data) {
                setTimeout(()=>{
                    routing('/')()
                },1000)
            }
        }
    })
}