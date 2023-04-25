import { addDoc,collection } from "firebase/firestore"
import { DB } from "../../../../../../../pages/_app"
import { UploadFiles } from "../../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing"
interface Params {
    userId: string|undefined|string[],
    program:string|undefined|string[],
    file: File;
    starValue: number;
}
// 리뷰 등록 함수
export const useSubmitReview = ({userId,program,file,starValue}:Params)=> {
    const routerHooks = useRoutingPageHooks()
    const onClcickSubmitReview = async(data:any)=>{
        const uploadImg = await UploadFiles('/newReview',file)
        const fileURL = uploadImg?.fullPath
        const reviewData={...data,userId,program,fileURL,starValue}
        try{
            addDoc(collection(DB, "programReview"),reviewData).then((res)=>(routerHooks(`${res.id}`)()))
            alert('리뷰 등록이 완료되었습니다.')
        }catch(error){
            alert(error)
        }
    }
    return onClcickSubmitReview
}