import { DB, FirebaseApp } from "../../../../pages/_app";
import { collection,addDoc } from "firebase/firestore";
import { getStorage,ref } from 'firebase/storage'

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

// 스토리지에 이미지 업로드 함수
export const uploadImage = (ImageUrl:string)=>{
    const storage = getStorage()
    ref(storage,`newReview/${ImageUrl}`)
}
