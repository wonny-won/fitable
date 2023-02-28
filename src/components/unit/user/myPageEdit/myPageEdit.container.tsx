import { useQuery, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "firebase/auth"
import { auth } from "../../../../../pages/_app"
import { loggedInUser } from "../../../../commons/util/functions/firebaseFunctions"
import MyPageEditUI from "./myPageEdit.presenter"
import useOnchangeInputs from "../../../../commons/util/hooks/onchangeInputs"

export default function MyPageEdit(){
    const {onChangeInputs, inputs} = useOnchangeInputs()
    useQueryClient()
    const getUserInfo = useQuery({
        queryKey: ['userInfo'],
        queryFn: loggedInUser
    })
    const onClickUpdateProfile = async()=>{
        const updateUser:any = {}
        if(inputs.displayName) updateUser.displayName = inputs.displayName
        if(inputs.phoneNumber) updateUser.displayName = inputs.displayName
        if(inputs.photoURL) updateUser.displayName = inputs.displayName
        try{
            await updateProfile(auth.currentUser, updateUser)
        }catch(error){
            console.log(error)
        }
    }
    return <MyPageEditUI onChangeInput={onChangeInputs}
                         onClickUpdateProfile={onClickUpdateProfile}
                         getUserInfo={getUserInfo.data}/>
}