import { useMutation } from "@tanstack/react-query"
import { logIn } from "../../../../../commons/util/functions/firebase/logInOut.ts/logIn"
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing";

export const logInMutation = (inputs:{email:string,password:string,passwordCheck:string;})=>{
    console.log(inputs)
    const routerHooks = useRoutingPageHooks()
    return useMutation({
        mutationFn: ()=> logIn(inputs),
        onSuccess:()=>routerHooks('/')()
    })
}