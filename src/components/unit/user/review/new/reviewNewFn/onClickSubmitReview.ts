import { addDoc,collection } from "firebase/firestore"
import { DB } from "../../../../../../../pages/_app"

interface Params {
    userId: string|undefined|string[],
    program:string|undefined|string[]
}
// 리뷰 등록 함수
export const onClcickSubmitReview = ({userId,program}:Params)=> (data:any)=>{
    const reviewData={...data,userId,program}
    try{
        addDoc(collection(DB, "programReview"),reviewData)
        alert('리뷰 등록이 완료되었습니다.')
    }catch(error){
        alert(error)
    }
}
