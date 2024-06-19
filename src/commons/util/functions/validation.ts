import * as yup from 'yup';

/************************************************************************************
* 높은 추상화 함수
************************************************************************************/
export const signupValidation = async (inputs:{email:string;password:string;passwordCheck:string})=>{
    console.log(inputs)
    // -- validation fn
    const emailFormCheck = await checkEmail(inputs.email)
    const pwIncludesNumberCheck = await passwordValidation(inputs.password)
    const pwIncludesEnglish = await passwordEnglishValidation(inputs.password)
    const coincidePw = checkPassword(inputs.password,inputs.passwordCheck )
  
    console.log(emailFormCheck,pwIncludesNumberCheck,pwIncludesEnglish,coincidePw)


    return (emailFormCheck && pwIncludesNumberCheck && pwIncludesEnglish && coincidePw) ? true : false
}
  
  /************************************************************************************
  * 낮은 추상화 함수 - 구체적 로직
  ************************************************************************************/
  //이메일 검증함수
  function checkEmail (email:string) {
      let schema = yup.string().email()
      const emailValidation = schema.isValid(email)
      return email==='' ? false:emailValidation
  }
  
  //비밀번호 숫자 포함 검증함수
  function passwordValidation (password:string) {
      let schema = yup.string().matches(/(1|2|3|4|5|6|7|8|9|0)/)
      const number = schema.isValid(password)
      return number
  }

  //비밀번호 영문자 포함 검증함수
  function passwordEnglishValidation (password:string) {
      // 받아온 비밀번호 모두 소문자로 변환후 검증
      const lowercasePassword = password.toLowerCase()
      let schema = yup.string().matches(/(q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m)/)
      const english = schema.isValid(lowercasePassword)
      return english
  }
  
  function checkPassword(password:string,passwordCheck:string){
    return password!==passwordCheck? false : true
  }
