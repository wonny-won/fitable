import { joinUsEmailMutation } from "./joinUsEmailMutation"

export const submitjoinUs = (inputs:{})=>{
    const joinUs = joinUsEmailMutation(inputs)
    return async()=>{ joinUs.mutate() }
}