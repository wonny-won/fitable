import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, DB } from "../../../../../../pages/_app";

// 현재 로그인한 사용자 가지고 오기
export const  loggedInUser = async ()=>{
    const result = await new Promise((resolve, reject) => {
        // 파이어베이스 제공 기본 유저 정보
        onAuthStateChanged(auth, (user) => {
            if (user) {
            if(user.uid) {
                resolve(user.reloadUserInfo)}
            } else {
                reject("로그인 하지 않은 유저입니다.")
            }
          });
    })
    // 추가적으로 넣어줬던 유저 데이터(컬럼 생성)
    console.log(result?.localId)
    const docref = doc(DB,'user',result?.localId)
    const userOtherData = await getDoc(docref)
    let userData = userOtherData.data()
    if (userOtherData.exists()) {
      userData = userOtherData.data()
      } else {
        console.log("문서가 없다");
      }

    return {
      result,
      userData
    } 
}
