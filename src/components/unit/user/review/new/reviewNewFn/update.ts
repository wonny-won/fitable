import { UploadFiles } from "../../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { updateReviewMutation } from "./updateReviewQuery";
interface Params {
    docId: any;
    program:string|undefined|string[];
    files: File[];
}
interface UpdateData {
    overAll?: string;
    reviewContents?:string;
    fileURL?:string[];
    fileName?:string[];
}
//리뷰 수정 함수
export const useUpdateReview = ({files,docId}:any)=>{
    const submitresult = updateReviewMutation(docId)
    const onClcickSubmitReview = async(data:any)=>{
        const updateData:any = {}
        if(data.overAll!=='') updateData.overAll = data.overAll
        if(data.reviewContents) updateData.reviewContents = data.reviewContents
        if(files.length>0) {
            const uploadImg = await UploadFiles('/newReview',files)
            const fileURL = uploadImg?.map((item)=>item.fullPath)
            const fileName = uploadImg?.map((item)=>item.name)
            updateData.fileURL = fileURL
            updateData.fileName = fileName
        } 
        try{
            submitresult.mutate(updateData)
            alert('리뷰 수정이 완료되었습니다.')
        }catch(error){
            alert(error)
        }
    }
    return onClcickSubmitReview
}