import { UploadFiles } from "../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { updateMutation } from "./updateMutation";
import { updateUserDataMutation } from "./updateUserData";

export interface Params {
    inputs: {
        displayName?: string,
        phoneNumber?: string
    } | undefined;
    file: File[];
    userUID: string[];
    docId: any;
}

// 유저 프로필 업데이트 함수
export const onClickUpdateProfile = ({inputs,file,userUID,docId}:Params)=>{
    const update = updateMutation()
    const updateUserData:any = updateUserDataMutation(userUID,docId)
    return async()=>{
        const updateUser:{photoURL?:string,displayName?:string} = {}
        const updateuserData:{phoneNumber?:string} = {}
        if(file){
            const fileURL:any[] = []
            fileURL.push(file)
            const uploadfile = await UploadFiles('/userProfile',fileURL)
            const allFileURL = uploadfile?.map((item)=>item.name)
            updateUser.photoURL = `https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/userProfile%2F${allFileURL?.[0]}?alt=media`
        }
        if(inputs?.displayName) updateUser.displayName = inputs.displayName
        if(inputs?.phoneNumber) updateuserData.phoneNumber = inputs.phoneNumber
        try{
            await updateUserData.mutate(updateuserData)
            await update.mutate(updateUser)
            alert('수정이 완료되었습니다.')
        }catch(error){
            console.log(error)
        }    
    }    
}