import { UploadFiles } from "../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { useIsEdit } from "./isEdit"
import { updateApplyDataMutation } from "./updateMutation";

export interface Params {
    userUID?: any;
    docId?: any;
}
export interface HOFParams {
    inputs: {}|{
        userWantFeedbackGuide: string,
        fileURL?:string[]
    };
    file: File[];

}

// 신청내역 수정 함수 - 컬렉션 수정시 확인 해주기
export const onClickUpdateApplyData = ({userUID,docId}:Params)=> {
    const {isEdit,onClickEdit} = useIsEdit()    
    const updateApplyData = updateApplyDataMutation(userUID,docId)
    const onClickEditReview = ({inputs,file}:HOFParams)=>async()=>{
        const updateData:any = {...inputs}
        if(file.length>0){
            const fileURL:any[] = []
            fileURL.push(file[file.length-1])
            const uploadfile = await UploadFiles('/applyFile',fileURL)
            const allFileURL = uploadfile?.map((item)=>item.fullPath)
            updateData.fileURL = allFileURL
        }
        await updateApplyData.mutate(updateData)
        onClickEdit()
    }
    return {
        onClickEditReview,
        isEdit,
        onClickEdit
    }
}