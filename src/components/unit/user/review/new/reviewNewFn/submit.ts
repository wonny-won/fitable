import { UploadFiles } from "../../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { createNewReviewMutation } from "./createNewReviewQuery"

interface Params {
    userId: string|undefined|string[],
    program:string|undefined|string[],
    files: File[];
    starValue: number;
    writer: string|undefined|string[];
    writerProfile: string|undefined|string[];
}

// 리뷰 등록 함수
export const useSubmitReview = ({userId,program,files,starValue,writer,writerProfile}:Params)=> {
    const submitresult = createNewReviewMutation()
    const onClcickSubmitReview = async(data:any)=>{
        const reviewData={...data,userId,program,starValue,writer,writerProfile,likeCount:0,dislikeCount:0}
        if(!writer) reviewData.writer = 'EDIT 버튼을 눌러 수정해보세요!'
        if(!writerProfile) reviewData.writerProfile = 'https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/userProfile%2Fnoneimg.jpeg?alt=media'
        console.log(reviewData)
        if(files.length>0) {
            const uploadImg = await UploadFiles('/newReview',files)
            const fileURL = uploadImg?.map((item)=>item.fullPath)
            const fileName = uploadImg?.map((item)=>item.name)
            reviewData.fileURL = fileURL
            reviewData.fileName = fileName
        } else{
            reviewData.fileURL = '등록된 파일이 없습니다.'
        }
        try{
            submitresult.mutate(reviewData)
            alert('리뷰 등록이 완료되었습니다.')
        }catch(error){
            alert(error)
        }
    }
    return onClcickSubmitReview
}