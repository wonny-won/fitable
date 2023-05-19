import { doc, updateDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

interface Params {
  collection: string;
  docId: string;
  data:any;
}

export const updateData = async({collection,docId,data}:Params)=>{
  const docRef = doc(DB, collection, docId);
  try{
    await updateDoc(docRef,data);
    return data   
  }catch(error){
    alert(error)
  }
}
