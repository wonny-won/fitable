import { useMutation } from "@tanstack/react-query"
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing"
import { updateData } from "../../../../../../commons/util/functions/firebase/update/updateData"

export const updateReviewMutation = (docId:string)=>{
    const routerHooks = useRoutingPageHooks()
    const updateDocMutaion = useMutation({
        mutationFn: async(data) => await updateData({collection:'/programReview',docId,data}),
        onSuccess: () => {routerHooks(`/review/${docId}`)()},
    })
    return updateDocMutaion
}