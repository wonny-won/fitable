import { addDoc,collection } from "firebase/firestore"
import { DB } from "../../../../../../../pages/_app"
import { UploadFiles } from "../../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
interface Params {
    userId: string|undefined|string[],
    program:string|undefined|string[],
    file: File;
}
// 리뷰 등록 함수
export const onClcickSubmitReview = ({userId,program,file}:Params)=> async(data:any)=>{
    const uploadImg = await UploadFiles('/newReview',file)
    const fileURL = uploadImg?.fullPath
    console.log(fileURL)
    const reviewData={...data,userId,program,fileURL}
    try{
        addDoc(collection(DB, "programReview"),reviewData)
        alert('리뷰 등록이 완료되었습니다.')
    }catch(error){
        alert(error)
    }
}
