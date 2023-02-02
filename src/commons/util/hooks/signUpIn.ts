import { ChangeEvent,useEffect,useState } from "react"
import { loggedInUser } from "../functions/firebaseFunctions"

// 로그인/회원가입 input 값 끌어오는 함수
export const useGetInputValue = ()=>{
    const [signUpInput, setSignUpInput] = useState({
        email: "",
        password: "",
    })
    const onChangeInput =(event:ChangeEvent<HTMLInputElement>)=>{
        const signUpInputKey = event.target.id
        setSignUpInput({...signUpInput, [signUpInputKey] :event.target.value})
    }
    return {
        onChangeInput,
        signUpInput
    }
}

// 로그인했는지 확인하는 함수
export const useIsLogInUser = ()=>{
    const [isLoggedInUser,setIsLoggedInUser] = useState(false)
    useEffect(()=>{
        const func = async()=>{
            const result = await loggedInUser()
            console.log("제발요",result)
            if(result){
                setIsLoggedInUser(true)
            }else{
                setIsLoggedInUser(false) 
            }
        }
        func()
        console.log(isLoggedInUser)
    },[isLoggedInUser])
    return isLoggedInUser
}

// 이메일, 비밀번호 검증 함수
interface Validation {
    email : string;
    password : string;
    checkpassword : string
}

export const useValidation = ({email,password,checkpassword}:Validation)=>{
    return 
}