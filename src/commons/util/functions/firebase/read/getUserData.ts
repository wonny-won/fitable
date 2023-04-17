import { doc, getDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

interface Params {
    docCollection:string;
    userUID: string;
    middleCollection:string;
    subcollection:string;
}

// DB내의 특정 문서 가지고 오기 
export const getUserData = async({docCollection,userUID,middleCollection,subcollection}:Params)=>{
    if( !userUID ) return false;
    const docref = doc(DB,docCollection,userUID,middleCollection,subcollection)
    const getData = await getDoc(docref)
    return getData.exists() ? getData.data() : console.log('문서가 없다')
}
