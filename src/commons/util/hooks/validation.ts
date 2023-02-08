import { ChangeEvent } from "react";

//이메일 검증함수
export const useCheckEmail = (email:string)=>{
    if(!email.includes("@")){
        alert("이메일 형식을 확인해주세요.")
        return 
    }
}