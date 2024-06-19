import { useMutation } from "@tanstack/react-query"
import { joinUsEmail } from "../../../../../commons/util/functions/firebase/create/signUp"
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing"

export const joinUsEmailMutation = (inputs:any)=>{
    const routing = useRoutingPageHooks()
    return useMutation({
        mutationFn: ()=>{ 
            const user = joinUsEmail(inputs)
            return user ? '회원가입 완료' : '회원가입 실패'
        },
        onSuccess: (data)=>{
            if(data=== '회원가입 완료') {
                alert('회원가입을 축하드립니다.')
                setTimeout(()=>{
                    routing('/')()
                },1000)
            }
        }
    })
}