import SignInUI from "./signIn.presenter"
import { ChangeEvent, useState } from "react";
import { joinUsEmail } from "../../../../commons/util/functions/firebaseFunctions";

export default function SignIn(){
    const [signInInput, setSignInInput] = useState({
        email: "",
        password: ""
    })
    const onChangeEmail =(event:ChangeEvent<HTMLInputElement>)=>{
        setSignInInput({...signInInput,email:event.target.value})
        console.log(event.target.value)
    }
    const onChangePassword =(event:ChangeEvent<HTMLInputElement>)=>{
        setSignInInput({...signInInput,password:event.target.value})
        console.log(event.target.value)
    }
    const onSubmit = ()=>{
        joinUsEmail({email:signInInput.email,password:signInInput.password})
    }
    return <SignInUI onChangeEmail={onChangeEmail}
                     onChangePassword={onChangePassword}
                     signInInput={signInInput}
                     onSubmit={onSubmit} />
}