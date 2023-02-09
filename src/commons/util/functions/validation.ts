//이메일,비밀번호 검증함수
export const validation = ()=>{
    
}
export const checkEmail = (email:string)=>{
    if(!email.includes("@")){
        alert("이메일 형식을 확인해주세요.")
        return false
    } 
}

// 비밀번호 검증 함수
export const checkPassword = (password:string,checkPassword:string)=>{
    if(password!==checkPassword){
        alert("비밀번호가 일치하지 않습니다.")
        return false
    } 
}