import { UploadFiles } from "../../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { updateReviewMutation } from "./updateReviewQuery";
interface Params {
    docId: string;
    program:string|undefined|string[];
    file: File;
}
//리뷰 수정 함수
export const useUpdateReview = ({file,docId}:Params)=>{
    const submitresult = updateReviewMutation(docId)
    const onClcickSubmitReview = async(data:any)=>{
        const updateData = {}
        if(data.overAll!=='') updateData.overAll = data.overAll
        if(data.reviewContents) updateData.reviewContents = data.reviewContents
        if(file) {
            const uploadImg = await UploadFiles('/newReview',file)
            const fileURL = uploadImg?.fullPath
            updateData.fileURL = fileURL
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
