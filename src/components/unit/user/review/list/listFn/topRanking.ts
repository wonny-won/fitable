import { query, orderBy, limit, getDocs, collection } from "firebase/firestore";
import { DB } from "../../../../../../../pages/_app";

export const topRanking = async()=>{
    const DataArr:any[] = []
    const dataQuery = query(collection(DB,'programReview'), orderBy("likeCount"), limit(3));

    const specificDatas = await getDocs(dataQuery);
    specificDatas.forEach((doc) => {
        const data = {id:doc.id,...doc.data()}
        DataArr.push(data)
    });

    return DataArr
}