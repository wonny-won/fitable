import { useIsLogInUser } from "./signUpIn"

export default function UseAuth(){
    const isLogin = useIsLogInUser()
    if(!isLogin){
        alert("로그인이 필요한 서비스 입니다.")
        return
    }
}