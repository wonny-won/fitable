import { collection, query, where, getDocs } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";

interface Params{
    collectionName: string;
    field: string;
    fieldValue: string;
}

// 특정 필드값으로 조건 만족하는 데이터 가지고 오기
export const getSpecificDatas = async({collectionName,field,fieldValue}:Params)=>{
    const DataArr:any[] = []
    const dataQuery = query(collection(DB, collectionName), where(field,"==",fieldValue));

    const specificDatas = await getDocs(dataQuery);
    specificDatas.forEach((doc) => {
        const data = {id:doc.id,...doc.data()}
        DataArr.push(data)
    });

    return DataArr
}