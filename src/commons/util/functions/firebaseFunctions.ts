import { DB } from "../../../../pages/_app";
import { collection,
         addDoc,
         getDocs,
         doc,
         getDoc,
         updateDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword
         ,signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged} from 'firebase/auth'
import 'firebase/compat/auth'
import { auth } from "../../../../pages/_app";
import { checkEmail,checkPassword, passwordValidation,passwordEnglishValidation } from "./validation";
// ----------------------------------- 타입존 ----------------------------- //

interface FirebaseParams {
    colletionName: string;
    data : any;
}
interface ReviewDetailParams {
    docCollection:string;
    docId: string;
}
interface JoinusParams {
    email : string;
    password : string;
    passwordCheck:string;
}

// ----------------------------------- 함수존 ----------------------------- //
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
// 신규회원 가입 함수
export const joinUsEmail = async({email,password,passwordCheck}:JoinusParams)=>{
    const emailChek = checkEmail(email)
    const passwordcheck = checkPassword(password,passwordCheck)
    const includesNumber = await passwordValidation(password)
    const IncludesEnglish = await passwordEnglishValidation(password)
    let userUID = ""
    if(emailChek!==false&&passwordcheck!==false&&includesNumber&&IncludesEnglish){
        try{
            const createUser =  await createUserWithEmailAndPassword(auth ,email, password)
            userUID = createUser.user.uid;
            alert("회원가입을 축하드립니다.")
            console.log(userUID)
            return userUID
        } catch(error){
            console.log(error)
        }
    }
    return userUID
}

// 기존 회원 로그인
export const logIn = async ({email,password}:JoinusParams)=>{
    let isLogin = false
    try{
        checkEmail(email)
        const result = await signInWithEmailAndPassword(auth ,email, password)
        result.operationType==="signIn" ? isLogin=true : isLogin=false
    }catch(error){
        console.log(error)
    }
    return isLogin
}
// 기존 회원 로그아웃
export const logOut = async ()=>{
    try{
        const result = await signOut(auth)
        alert("로그아웃에 성공했습니다.")
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

// 현재 로그인한 사용자 가지고 오기
export const  loggedInUser =async ()=>{
    const result = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              if(user.uid) resolve(user.uid)
            } else {
                reject("로그인 하지 않은 유저입니다.")
            }
          });
    })
    return result
}

