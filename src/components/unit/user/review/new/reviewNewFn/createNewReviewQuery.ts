import { useMutation } from "@tanstack/react-query"
import { addDocs } from "../../../../../../commons/util/functions/firebase/create/addDocs"
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing"

export const createNewReviewMutation = ()=>{
    const routerHooks = useRoutingPageHooks()
    const createDocMutaion = useMutation({
        mutationFn: (data) => addDocs({colletionName:'/programReview',data}),
        onSuccess: (context) => routerHooks('/mypage')(),
    })
    return createDocMutaion
}