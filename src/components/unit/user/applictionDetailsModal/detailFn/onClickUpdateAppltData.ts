import { updateUserApplyDatas } from "../../../../../commons/util/functions/firebase/update/updateUserApplyData"
import { UploadFiles } from "../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { useIsEdit } from "./isEdit"

interface Params {
    inputs: {}|{
        userWantFeedbackGuide: string,
        fileURL?:string
    };
    file: File;
    userUID: string;
    docId: string;
    edit: boolean;
}

// 신청내역 수정 함수 - 컬렉션 수정시 확인 해주기
export const onClickUpdateApplyData = ({inputs,file,userUID,docId,edit}:Params)=> {    
    const {setIsEdit} = useIsEdit()
    return async()=>{
        console.log(edit)
        const data = {...inputs}
        if(file){
            const uploadfile = await UploadFiles('applyFile',file)
            const fileUrl = uploadfile?.fullPath  
            if(fileUrl!=='') data.fileURL = fileUrl 
        }
         await updateUserApplyDatas({docCollection:'applyData',userUID,middleCollection:'applyProgram',docId},data)
         setIsEdit(!edit)
    }
}
