import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../../pages/_app";
import { getAllUserData } from "./getAllUserData";

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
    // 유저 추가정보(신청내역, 쿠폰/결제 정보)가지고 오기  
    const getAllApplyDatas = await getAllUserData({maincollection:'applyData',userUID:result?.localId,middleCollection:'applyProgram'})
    const getUserDatas = await getAllUserData({maincollection:'user',userUID:result?.localId,middleCollection:'userData'})

    return {
      result,
      getAllApplyDatas,
      getUserDatas
      // userData
    } 
}
