import { DB } from "../../../../pages/_app";
import { collection,
         addDoc,
         getDocs,
         doc,
         getDoc} from "firebase/firestore";

interface FirebaseParams {
    colletionName: string;
    data : any;
}


// DB에 문서 추가하는 함수 - 리뷰 / 댓글
export const addDocs = async ({colletionName, data} :FirebaseParams) => {
    const result = await addDoc(collection(DB,colletionName),data)
    alert("등록이 완료되었습니다.")
    return result.id
}

// DB내의 모든 문서 가지고 오는 함수 - review list 뽑아오기 / 댓글 list 뽑아오기
export const getDatas = async(dcoCollection:string)=>{
    const getAllDatas =  await getDocs(collection(DB,dcoCollection))
   
    const dataArr:any[] = []
    getAllDatas.forEach((data)=>{
        //받아온 데이터 사용하기 편하게 가공하기.
        dataArr.push({id: data.id,data: data.data()})
    })
    console.log(dataArr)
    return dataArr
}

// DB내의 특정 문서 가지고 오기 - review 디테일 페이지
export const getData = async(dcoCollection:string)=>{
    const docref = doc(DB,dcoCollection)
    const getData = await getDoc(docref)

    if (getData.exists()) {
        console.log("data:", getData.data());
      } else {
        console.log("문서가 없다");
      }
}