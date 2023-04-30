import { addDoc,collection } from "firebase/firestore"
import { DB } from "../../../../../../../pages/_app"
import { UploadFiles } from "../../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing"
interface Params {
    userId: string|undefined|string[],
    program:string|undefined|string[],
    file: File;
    starValue: number;
    writer: string|undefined|string[];
    writerProfile: string|undefined|string[];
}
// 리뷰 등록 함수
export const useSubmitReview = ({userId,program,file,starValue,writer,writerProfile}:Params)=> {
    const routerHooks = useRoutingPageHooks()
    const onClcickSubmitReview = async(data:any)=>{
        const uploadImg = await UploadFiles('/newReview',file)
        const fileURL = uploadImg?.fullPath
        const reviewData={...data,userId,program,fileURL,starValue,writer,writerProfile,likeCount:0,dislikeCount:0}
        try{
            const result = await addDoc(collection(DB, "programReview"),reviewData)
            routerHooks(`${result?.id}`)()
            alert('리뷰 등록이 완료되었습니다.')
        }catch(error){
            alert(error)
        }
    }
    return onClcickSubmitReview
}