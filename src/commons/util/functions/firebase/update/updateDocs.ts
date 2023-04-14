import { doc, updateDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

interface ReviewDetailParams {
    docCollection:string;
    docId: string;
}

// DB내의 문서 업데이트하기.
export const updateDatas = async({docCollection,docId}:ReviewDetailParams, data:any)=>{
    const updateDataRef = doc(DB,docCollection,docId)
    await updateDoc(updateDataRef,data)
}
