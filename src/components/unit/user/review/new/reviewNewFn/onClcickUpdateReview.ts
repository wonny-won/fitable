import { addDoc,collection } from "firebase/firestore"
import { DB } from "../../../../../../../pages/_app"
import { UploadFiles } from "../../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { updateData } from "../../../../../../commons/util/functions/firebase/update/updateData";
interface Params {
    docId: string;
    program:string|undefined|string[];
    file: File;
    starValue: number;
}
// 리뷰 수정 함수
export const onClcickUpdateReview = ({docId,file,starValue}:Params)=> async(data:any)=>{
    const updateData = {...data}
    if(file){
        const uploadImg = await UploadFiles('/newReview',file)
        updateData.fileURL = uploadImg?.fullPath
    }
    try{
        await updateData({collection:'programReview',docId,updateData})
        alert('수정이 완료되었습니다.')
    }catch(error){
        alert(error)
    }
}
