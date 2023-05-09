import { collection, getDocs } from "firebase/firestore"
import { DB } from "../../../../../../pages/_app"

// DB 문서 모두 가지고 오기 - 페이지네이션 적용
export const getDatas = async(docCollection:string,page:number)=>{
    const getAllDatas =  await getDocs(collection(DB,docCollection))
    //받아온 전체 데이터 배열에 넣기
    const dataArr:any[] = []
    getAllDatas.forEach((data)=>{
        dataArr.push({id: data.id,data: data.data()})
    })

    // 총 문서의 개수 - 페이지 네이션 시 필요
    const fetchDataCount = dataArr.length

    // 페이네이션을 위한 처리 - 12개씩 나눠담기
    const paginatedArr = []
    for (let i = 0; i < dataArr.length; i += 12) {
        paginatedArr.push(dataArr.slice(i, i + 12));
      }
    return {
       pageArr : paginatedArr[page-1],
       fetchDataCount
    }
}
