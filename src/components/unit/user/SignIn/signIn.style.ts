import styled from "@emotion/styled"

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
    margin-top:10px
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