import { doc, updateDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

interface ReviewDetailParams {
    docCollection:string;
    userUID: any;
    middleCollection:string;
    subcollection: string;
    docId:any;
}

// applyData, userData, applyProgram 업데이트하기
export const updateUserApplyDatas = async({docCollection,userUID,middleCollection,docId}:any, data:any)=>{
    if(!userUID) return false
    let updateData = {}
    const updateDataRef = doc(DB,docCollection,userUID,middleCollection,docId)
    try{
        await updateDoc(updateDataRef,data)
        updateData = {id:userUID,...data}
        // alert('수정이 완료되었습니다.')
    }catch(error){
        alert(error)
    }
    return updateData
}
