import { logInMutation } from "./loginMutation"

export const onClickLogin = (inputs:{email:string,password:string,passwordCheck:string;})=>{
    const login = logInMutation(inputs)
    return async() => { 
        const data = await login.mutate()
        console.log(data) 
    }
}