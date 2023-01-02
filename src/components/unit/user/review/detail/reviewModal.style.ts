import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    height: 100vh;
`
export const Img = styled.div`
    width: 100%;
    height: 70vh;
    border: 1px solid black;
`
export const ReviewContents =  styled.div`
    width: 100%;
    padding-left: 50px;
`
export const SectionWrap = styled.section`
    display: flex;
    align-items: center;
    padding: 25px 0;
`
export const ProgromImg = styled.img`
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50px 50px;
`
export const TextWrap = styled.div`
    padding: 10px;
    font-weight: 600;
`
export const Line = styled.hr`
    background-color: #eee;
    height: 1px;
    width: 100%;
    border: none;
    margin-bottom: 25px;
`
export const UserSection = styled.section`
    width: 350px;
    border: 1px solid #eee;
    border-radius: 4px;
    color : #707680;
    font-size: 11px;
    font-weight: 300;
    padding: 5px 15px;
    margin: 20px 0;
`
export const User = styled.div`
    color:#14161a;
    font-size: 13px;
`
export const UserSpan = styled.span`
    font-weight: 400;
`
export const Button = styled.button`
    background-color: transparent;
    border: 1px solid #E9D7C1;
    border-radius: 4px;
    font-size: 12px;
    margin-right: 10px;
    &:hover{
        cursor: pointer;
    }
`
export const Count = styled.span`
    font-weight: 700;
`