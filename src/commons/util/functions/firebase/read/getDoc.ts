import { doc, getDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

interface Params {
    docCollection:string;
    docId: string;
}

// DB내의 특정 문서 가지고 오기 
export const getData = async({docCollection,docId}:Params)=>{
    if( !docId ) return false;
    const docref = doc(DB,docCollection,docId)
    const getData = await getDoc(docref)
    return getData.exists() ? getData.data() : console.log('문서가 없다')
}
