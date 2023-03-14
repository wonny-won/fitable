import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, DB } from "../../../../../pages/_app";

// 현재 로그인한 사용자 가지고 오기
export const  loggedInUser = async ()=>{
    const result = await new Promise((resolve, reject) => {
        // 기본 유저 정보
        onAuthStateChanged(auth, (user) => {
            if (user) {
              if(user.uid){
                // 추가적으로 넣어준 user데이터 가지고 오기
                const docref = doc(DB,'uesr',user.uid)
                const userOtherData = getDoc(docref)
                    .then((res)=>{
                        console.log(res)
                    })
                const userInfo = { ...user.reloadUserInfo,...userOtherData}
                resolve(userInfo)
              }
            } else {
                reject("로그인 하지 않은 유저입니다.")
            }
          });
    })
    return result
}
