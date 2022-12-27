import { DB } from "../../../../pages/_app";
import { collection,addDoc } from "firebase/firestore";
import { getStorage,ref,uploadBytes } from 'firebase/storage'
import { ChangeEvent } from "react";

interface FirebaseParams {
    colletionName: string;
    data : any;
}
// 파이어 베이스에 문서 추가하는 함수 - 리뷰 / 댓글
export const addDocs = async ({colletionName, data} :FirebaseParams) => {
    const result = await addDoc(collection(DB,colletionName),data)
    alert("등록이 완료되었습니다.")
    return result.id
}
