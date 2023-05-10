import { doc, deleteDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

export const deleteOneDoc = async (docId:string)=>{
    try{
        await deleteDoc(doc(DB, "programReview", docId));
    } catch(error){
        console.log(error)
    }

}
