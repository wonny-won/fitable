import { updateProfile } from "firebase/auth"
import { auth } from "../../../../../../pages/_app"
import { UploadFiles } from "../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { updateMutation } from "./updateMutation";

export interface Params {
    inputs: {
        displayName: string,
    } | undefined;
    file: File[]
}

// 유저 프로필 업데이트 함수
export const onClickUpdateProfile = ({inputs,file}:Params)=>{
    const update = updateMutation()
    return async()=>{
        const updateUser:any = {}
        if(file){
            const fileURL:any[] = []
            fileURL.push(file)
            const uploadfile = await UploadFiles('/userProfile',fileURL)
            const allFileURL = uploadfile?.map((item)=>item.name)
            updateUser.photoURL = `https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/userProfile%2F${allFileURL[0]}?alt=media`
        }
        if(inputs?.displayName) updateUser.displayName = inputs.displayName
        
        try{
            await update.mutate(updateUser)
            // await updateProfile(auth.currentUser, {...updateUser})
            alert('수정이 완료되었습니다.')
        }catch(error){
            console.log(error)
        }    
    }    
}
