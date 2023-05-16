import { updateProfile } from "firebase/auth"
import { auth } from "../../../../../../pages/_app"
import { UploadFiles } from "../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"

export interface Params {
    inputs: {
        displayName: string,
    } | undefined;
    file: File[]
}

// 유저 프로필 업데이트 함수
export const onClickUpdateProfile = async ({inputs,file}:Params)=>{
    const updateUser:any = {}
    if(file.length>0){
       const uploadResult = await UploadFiles('/userProfile',file)
       updateUser.photoURL = `https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/userProfile%2F${uploadResult.name}?alt=media`
    }
    if(inputs?.displayName) updateUser.displayName = inputs.displayName
    try{
        await updateProfile(auth.currentUser, {...updateUser})
        alert('수정이 완료되었습니다.')
        return '수정완료'
    }catch(error){
        console.log(error)
    }
}
