import { collection, getDocs } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

interface GetAllApplyDataType {
    maincollection:string;
    userUID:string;
    middleCollection:string;
}
// ApplyProgram, UserData 가지고 오기
export const getAllUserData = async ({maincollection,userUID,middleCollection}:GetAllApplyDataType)=>{
    if( !userUID ) return false;
    const applyDataArr:any[] = []
    const querySnapshot = await getDocs(collection(DB, maincollection,userUID,middleCollection));
    querySnapshot.forEach((doc) => {
      const data = {id:doc.id, ...doc.data()}
      applyDataArr.push(data)
    });
  return applyDataArr
}
