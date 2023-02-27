import { updateProfile } from "firebase/auth"
import { ChangeEvent, useState } from "react"
import { auth } from "../../../../../pages/_app"
import MyPageEditUI from "./myPageEdit.presenter"

export default function MyPageEdit(){
    const [ inputs, setInputs ] = useState({
        displayName:"",
        phoneNumber:"",
        email:"",
        photoURL:""
    })
    const onChangeInput = (event:ChangeEvent<HTMLInputElement>)=>{
        const inputsKey = event.target.id
        setInputs({...inputs, [inputsKey] :event.target.value})
        console.log(inputs)
    }
    const onClickUpdateProfile = ()=>{
        updateProfile(auth.currentUser, inputs).then(() => {
           console.log(auth.currentUser) 
          }).catch((error) => {
           console.log(error)
          });     
    }
    console.log(typeof(inputs.phoneNumber))
    return <MyPageEditUI onChangeInput={onChangeInput}
                         onClickUpdateProfile={onClickUpdateProfile}/>
}