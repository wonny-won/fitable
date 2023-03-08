import styled from "@emotion/styled";
import { BTForm } from "../joinUs/joinUs.style";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 85%;
    align-self: start;
    justify-content: center;
`
export const Title = styled.h1`
    width: 85%;
    font-size: 22px;
    font-weight: 400;
    padding: 15px 0;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
`
export const H1 = styled.h1`
    font-size: 17px;
    font-weight: 400;
    width: 15%;
    height: 100%;
    background-color: #f8f8f8;
    padding: 20px 0 20px 20px;
    margin: 0;
`
export const Span = styled.span`
    color: red;
`
export const MiniWrap = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ddd;
    align-items: center;
`
export const MiniWrapTop = styled(MiniWrap)`
    border-top: 1px solid #ddd ;
`
export const ImgWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 140px 0 0 25px;
`
export const ResultImg = styled.div`
    padding: 20px;
`
export const ProfileImg = styled(H1)`
    width: 15%;
    height: 265px;
    line-height: 212.5px;
    padding-left: 30px;
` 
export const  ImgInput = styled.label`
    width : 50px;
    height: 20px;
    text-align: center;
    font-size: 15px;
    background-color:#fff;
    border:1px solid #231f20;
    color : #231f20;
    /* margin: 20px 0 0 20px; */
    outline: none;
    &:hover{
        cursor:pointer ;
        background-color: #231f20;
        color:#fff;
        transition: all 0.5s ease;
    }
`
export const UserProfileImg = styled.div`
    font-size: 15px;
    font-weight: 300;
    color: grey;
    padding-top: 10px;
`
export const Input = styled.input`
    width: 287px;
    height: 31px;
    border: 1px solid #ddd;
    margin: 0 20px;
    outline: none;
`
export const BtWrap = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 25px;
`
export const SubmitBt = styled(BTForm)`
    width: 35%;
    background-color: #231f20;
    color:#fff;
    &:hover{
        background-color:#fff;
        border:1px solid #231f20;
        color : #231f20;
    }
`
export const CancelBt = styled(BTForm)`
    width: 35%;
` 