import { useMutation } from "@tanstack/react-query"
import { addDocs } from "../../../../../../commons/util/functions/firebase/create/addDocs"
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing"

export const createNewREviewMutation = ()=>{
    const routerHooks = useRoutingPageHooks()
    const createDocMutaion = useMutation({
        mutationFn: async(data) => await addDocs({colletionName:'/programReview',data}),
        onSuccess: (context) => routerHooks(`${context}`)(),
    })
    return createDocMutaion
}