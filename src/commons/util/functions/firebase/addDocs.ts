import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { DB } from "../../../../../pages/_app";

interface FirebaseParams {
    colletionName: string;
    data : any;
}

// DB에 문서 추가하는 함수
export const addDocs = async ({colletionName, data} :FirebaseParams) => {
    const result = await addDoc(collection(DB,colletionName),data)
    alert("등록이 완료되었습니다.")
    return result.id
}

// _id를 직접 만들어서 문서 추가하기 (user와 관련된 Data 생성시)
export const addCustomIdDoc = (collection:string,userUID:string,Data:any)=>{
    setDoc(doc(DB,collection,userUID),Data)
}
