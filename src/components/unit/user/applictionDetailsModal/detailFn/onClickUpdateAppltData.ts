import { updateUserApplyDatas } from "../../../../../commons/util/functions/firebase/update/updateUserApplyData"
import { UploadFiles } from "../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { useIsEdit } from "./isEdit"
import { updateApplyDataMutation } from "./updateMutation";

interface Params {
    inputs: {}|{
        userWantFeedbackGuide: string,
        fileURL?:string[]
    };
    file: File[];
    userUID: string;
    docId: string;
    edit: boolean;
}

// 신청내역 수정 함수 - 컬렉션 수정시 확인 해주기
export const onClickUpdateApplyData = ({inputs,file,userUID,docId,edit}:Params)=> {    
    const {setIsEdit} = useIsEdit()
    const updateApplyData = updateApplyDataMutation(userUID,docId)
    return async()=>{
        console.log(edit)
        const updateData = {...inputs}
        if(file){
            const fileURL:any[] = []
            fileURL.push(file[file.length-1])
            const uploadfile = await UploadFiles('/applyFile',fileURL)
            const allFileURL = uploadfile?.map((item)=>item.fullPath)
            updateData.fileURL = allFileURL
        }
        await updateApplyData.mutate(updateData)
         setIsEdit(!edit)
    }
}
