import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

interface FirebaseParams {
    colletionName: string;
    data : any;
}

// DB에 문서 추가하는 함수
export const addDocs = async ({colletionName, data} :FirebaseParams) => {
    const result = await addDoc(collection(DB,colletionName),data)
    return result.id
}
