import { doc, updateDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

interface ReviewDetailParams {
    docCollection:string;
    userUID: string;
    middleCollection:string;
    subcollection: string;
    docId:string;
}

// applyData, userData, applyProgram 업데이트하기
export const updateUserApplyDatas = async({docCollection,userUID,middleCollection,docId}:ReviewDetailParams, data:any)=>{
    if(!userUID) return false
    let updateData = {}
    const updateDataRef = doc(DB,docCollection,userUID,middleCollection,docId)
    await updateDoc(updateDataRef,data)
    .then(()=>{
        updateData = {id:userUID,...data}
    })
    .catch(()=>(console.log('수정에 실패했습니다.')))
    alert('수정이 완료되었습니다.')
    return updateData
}
