import { useMutation } from "@tanstack/react-query"
import { logIn } from "../../../../../commons/util/functions/firebase/logInOut.ts/logIn"
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing";

export const logInMutation = (inputs:{email:string,password:string,passwordCheck:string;})=>{
    const routerHooks = useRoutingPageHooks()
    return useMutation({
        mutationFn: async()=> logIn(inputs),
        onSuccess:(data)=>{
            if(data){ routerHooks('/')() }else{
                alert('비밀번호와 아이디를 확인해주세요.')
            }
        }
    })
}