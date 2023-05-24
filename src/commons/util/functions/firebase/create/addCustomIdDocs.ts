import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";
import { v4 as uuidv4} from 'uuid'

//  collection id를 userUId로 생성 & 하위 컬렉션을 배치
export const addCustomIdDoc = (collection:string,userUID:string,middleCollection:string,Data:any)=>{
    try{
        const subcollection = uuidv4()
        setDoc(doc(DB,collection,userUID,middleCollection,subcollection),{...Data,createAt:serverTimestamp()}).then((res)=>(console.log(res)))
        return subcollection    
    } catch(error){
        console.log(error)
    }
}

