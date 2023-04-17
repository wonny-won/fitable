import { doc, getDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

export interface Params {
    docCollection:string;
    userUID: string;
    middleCollection:string
    docId:string;
}

// DB내의 특정 문서 가지고 오기 
export const getOneApplyData = async({docCollection,userUID,middleCollection,docId}:Params)=>{
    if( !userUID ) return true;
    const docref = doc(DB,docCollection,userUID,middleCollection,docId)
    const getData = await getDoc(docref)
    return getData.exists() ? getData.data() : console.log('문서가 없다')
}
