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
            if(result){
                setIsLoggedInUser(true)
            }else{
                setIsLoggedInUser(false) 
            }
        }
        func()
    },[isLoggedInUser])
    return isLoggedInUser
}
