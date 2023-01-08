import { DB } from "../../../../pages/_app";
import { collection,
         addDoc,
         getDocs,
         doc,
         getDoc,
         updateDoc } from "firebase/firestore";

interface FirebaseParams {
    colletionName: string;
    data : any;
}
interface ReviewDetailParams {
    docCollection:string;
    docId: string;
}


// DB에 문서 추가하는 함수 - 리뷰 / 댓글
export const addDocs = async ({colletionName, data} :FirebaseParams) => {
    const result = await addDoc(collection(DB,colletionName),data)
    alert("등록이 완료되었습니다.")
    return result.id
}

// DB내의 모든 문서 가지고 오는 함수(리턴값 프로미스 형태) - review list 뽑아오기 / 댓글 list 뽑아오기
export const getDatas = async(docCollection:string)=>{
    const getAllDatas =  await getDocs(collection(DB,docCollection))
    //받아온 데이터 사용하기 편하게 가공하기.
    const dataArr:any[] = []
    getAllDatas.forEach((data)=>{
        dataArr.push({id: data.id,data: data.data()})
    })
    return dataArr
}

// DB내의 특정 문서 가지고 오기 - review 디테일 페이지
export const getData = async({docCollection,docId}:ReviewDetailParams)=>{
    const docref = doc(DB,docCollection,docId)
    const getData = await getDoc(docref)

    if (getData.exists()) {
        return  getData.data()
      } else {
        console.log("문서가 없다");
      }
}

// DB내의 문서 업데이트하기.
export const updateDatas = async({docCollection,docId}:ReviewDetailParams, data:any)=>{
    const updateDataRef = doc(DB,docCollection,docId)
    await updateDoc(updateDataRef,data)
}