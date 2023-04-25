import { addDoc,collection } from "firebase/firestore"
import { DB } from "../../../../../../../pages/_app"
import { UploadFiles } from "../../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
interface Params {
    userId: string|undefined|string[],
    program:string|undefined|string[],
    file: File;
    starValue: number;
}
// 리뷰 수정 함수
export const onClcickUpdateReview = ({userId,program,file,starValue}:Params)=> async(data:any)=>{
    // const uploadImg = await UploadFiles('/newReview',file)
    // const fileURL = uploadImg?.fullPath
    // console.log(fileURL)
    // const reviewData={...data,userId,program,fileURL,starValue}
    // console.log(reviewData)
    // try{
    //     addDoc(collection(DB, "programReview"),reviewData)
    //     alert('리뷰 등록이 완료되었습니다.')
    // }catch(error){
    //     alert(error)
    // }
}
