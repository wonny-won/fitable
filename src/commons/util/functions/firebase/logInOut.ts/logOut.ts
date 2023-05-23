import { signOut } from "firebase/auth"
import { auth } from "../../../../../../pages/_app"

// 기존 회원 로그아웃
export const userlogOut = async ()=>{
    try{
        const result = await signOut(auth)
        alert("로그아웃에 성공했습니다.")
    }catch(error){
        console.log(error)
    }
}
