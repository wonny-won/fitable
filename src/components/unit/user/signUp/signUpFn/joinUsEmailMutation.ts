import { useMutation } from "@tanstack/react-query"
import { joinUsEmail } from "../../../../../commons/util/functions/firebase/create/signUp"
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing"

export const joinUsEmailMutation = (inputs:any)=>{
    const routing = useRoutingPageHooks()
    return useMutation({
        mutationFn: ()=> joinUsEmail(inputs),
        onSuccess: (data)=> { 
            if(data) routing('/')() 
        }
    })
}