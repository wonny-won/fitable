import { logInMutation } from "./loginMutation"

export const onClickLogin = (inputs:{email:string,password:string,passwordCheck:string;})=>{
    const login = logInMutation(inputs)
    return () => { login.mutate() }
}