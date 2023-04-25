import { doc, getDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

interface Params {
    collection: string;
    docId: string;
}

export const getOneDoc = async ({collection,docId}:Params)=>{
    const docRef = doc(DB, collection, docId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : alert('게시글이 존재하지 않습니다.')    
}
