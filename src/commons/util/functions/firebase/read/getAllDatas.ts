import { collection, getDocs } from "firebase/firestore"
import { DB } from "../../../../../../pages/_app"

// DB 문서 모두 가지고 오기
export const getDatas = async(docCollection:string)=>{
    const getAllDatas =  await getDocs(collection(DB,docCollection))
    //받아온 데이터 사용하기 편하게 가공
    const dataArr:any[] = []
    getAllDatas.forEach((data)=>{
        dataArr.push({id: data.id,data: data.data()})
    })
    return dataArr
}
