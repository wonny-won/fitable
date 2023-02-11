import styled from "@emotion/styled"
import { AnyObject, StringSchema } from "yup";
import * as yup from 'yup'
interface SignUpInputProps{
    signUpInput: {
        email : string;
        password : string;
        passwordCheck : string;
    };
    schema?: Promise<{
        result: boolean;
        schema: StringSchema<string | undefined, AnyObject, undefined, "">;
    }>

}
const Number = "1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"0"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1`
    font-size: 20px;
    font-weight: semi-bold;
    width: 80%;
    padding-left: 15px;
    margin: 20px 0 0 0 ;
`
export const Line = styled.hr`
    width: 80%;
    height: 1px;
    border: none;
    background-color: black;
    margin: 15px 0 30px 0;
`
export const InputWrap = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
`
export const Input = styled.input`
    width: 100%;
    height: 52px;
    border : 1.5px solid #dadada;
    padding-left: 10px;
    outline: none;
    margin-top:2px;
`
export const SubmitBt = styled.button`
    height: 52px;
    background-color: #231f20;
    border: 1px solid #231f20;
    color: #fff;
    font-weight: 500;
    margin-top: 20px;
    &:hover{
        cursor: pointer;
    }
`
export const InputTitle =styled.h2`
    font-size: 12px;
    font-weight: 400;
    color : #ddd;
    margin-bottom: 0;
`
export const ErrorMS =  styled.div`
    padding: 3px 0 10px 0;
    height: 23px;
    font-size: 10px;
    color: red;
`
export const PwCondition = styled.div`
    padding-left:5px ;
`
export const Length = styled.span`
    padding-right: 3px;
    color:${(props:SignUpInputProps)=>(props.signUpInput.password.length >= 6 ? "#8D60F5":"#ddd")};
    font-weight:${(props:SignUpInputProps)=>(props.signUpInput.password.length >= 6 ? "600":"400")};
`
export const IncludesNumber = styled.span`
        padding-right: 3px;
        color:${(props:SignUpInputProps)=>{
            const schema = yup.string().matches(/(1|2|3|4|5|6|7|8|9|0)/)
            const password = schema.isValid(props.signUpInput.password)
            return  password.then((res)=>(res)) ? "#8D60F5":"#ddd"
        }};
        font-weight:${(props:SignUpInputProps)=>(props.signUpInput.password.includes(Number) ? "600":"400")};

`