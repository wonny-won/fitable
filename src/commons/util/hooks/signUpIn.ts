import { signInWithEmailAndPassword } from "firebase/auth"
import { ChangeEvent,useEffect,useState } from "react"
import { useRecoilState } from "recoil"
import { auth } from "../../../../pages/_app"
import { loggedInUser } from "../functions/firebaseFunctions"
import { passwordValidation,passwordEnglishValidation,checkPassword,checkEmail } from "../functions/validation"
import { isLoggedin } from "../recoilAtom/atom"
import useOnchangeInputs from "./onchangeInputs"

// 로그인/회원가입 input 값 끌어오는 함수
export const useGetInputValue = ()=>{
    const {inputs, onChangeInputs} = useOnchangeInputs()
    const [numberBool,setNumberBool] = useState(false)
    const [englishBool,setEnglishBool] = useState(false)
    const [passwordError,setPasswordError] = useState("비밀번호가 일치하지 않습니다.")
    const [emailError,setEmailError] = useState("이메일 형식이 아닙니다.")
    const onChangeInput =(event:ChangeEvent<HTMLInputElement>)=>{
        // 유저 입력값 가지고 오는 함수 (공통함수)    
        onChangeInputs(event)

        // onChange시에 이메일 형식 검증함수 실행 후 결과값 반환
        if(event.target.id==="email"){
            const emailCheck = checkEmail(event.target.value)
            emailCheck!==false ? setEmailError("") : setEmailError("이메일 형식이 아닙니다.")
        }
        // onChange시에 숫자,영문 포함 검증함수 실행 후 결과값 반환
        if(event.target.id==="password"){
            passwordValidation(event.target.value).then((res)=>{
                setNumberBool(res) 
            })
            passwordEnglishValidation(event.target.value).then((res)=>{
                setEnglishBool(res)
            })
        }
        // onchange 시에 비밀번호 일치 검증함수 실행 후 결과값 반환
        if(event.target.id==="passwordCheck"){
           const coincidePassword = checkPassword(inputs?.password,event.target.value)
           coincidePassword!==false ? setPasswordError("") : setPasswordError("비밀번호가 일치하지 않습니다.") 
        }
    }
    return {
        onChangeInput,
        inputs,
        numberBool,
        englishBool,
        passwordError,
        emailError,
    }
}


// 로그인했는지 확인하는 함수
export const useIsLogInUser = ()=>{
    const [isLoggedInUser,setIsLoggedInUser] = useState(false)
    useEffect(()=>{
        let isMounted = true
        const func = async()=>{
            const result = await loggedInUser()
            if(result&&isMounted){
                setIsLoggedInUser(true)
            }else{
                setIsLoggedInUser(false) 
            }
        }
        func()
        return ()=>{ isMounted = false }
    },[isLoggedInUser])
    return isLoggedInUser
}
