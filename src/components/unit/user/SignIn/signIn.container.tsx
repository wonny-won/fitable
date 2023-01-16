import SignInUI from "./signIn.presenter"
import { ChangeEvent, useState } from "react";
import { joinUsEmail } from "../../../../commons/util/functions/firebaseFunctions";

export default function SignIn(){
    const [signInInput, setSignInInput] = useState({
        email: "",
        password: ""
    })
    const onChangeInput =(event:ChangeEvent<HTMLInputElement>)=>{
        const signInInputKey = event.target.id
        setSignInInput({...signInInput, [signInInputKey] :event.target.value})
    }
    const onSubmit = ()=>{
        joinUsEmail({email:signInInput.email,password:signInInput.password})
    }
    return <SignInUI onChangeInput={onChangeInput}
                     signInInput={signInInput}
                     onSubmit={onSubmit} />
}