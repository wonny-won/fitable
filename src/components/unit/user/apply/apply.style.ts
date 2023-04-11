import styled from "@emotion/styled";

export const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const Title = styled.h1`
    text-align: center;
    font-size: 40px;
    color: #8D60F5;
    font-family: 'LOTTERIACHAB';
`
export const TitleImg = styled.img`
    width: 50px;
    height: 40px;
    size: cover;
    margin-left: 10px;
`
export const Container =  styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 80px;
    margin-left: 3%;
`
export const ProgramCard = styled.div`
    border: 2px solid #231f20;
    border-radius: 5px;
    padding: 50px 50px 0 50px;
    font-size: 13px;
    font-weight: 300;
`
export const ProgramTitle = styled.h2`
    margin-bottom: 3px;
    font-size: 23px;
`
export const ProgramTitleSpan = styled.span`
    background-color: #FFE100;
    padding: 1px 3px;
`
export const GuideTitle = styled.h3`
    margin-top: 50px;
    font-size: 20px;
`
export const Text =  styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 100px;
`
export const ProgramText = styled.div`
    font-family: 'SUIT-Regular';
    padding-bottom: 8px;
    font-size: 14px;
`
export const TextArea = styled.textarea`
    font-family: 'SUIT-Regular';
`
export const FileInput = styled.input`
    font-family: 'SUIT-Regular';
`
export const Notification = styled.div`
    color: red;
    font-size: 10px;
    font-family: 'SUIT-Regular'; 
    padding-top: 10px;
    font-weight: bold;
`
export const ProgramSection = styled.section`
    display: flex;
    flex-direction: column;
    border-top: 1px solid black;
`
export const SubmitBt = styled.button`
    font-size: 17px;
    width : 50%;
    padding: 10px 20px;
    margin: 50px 25% 0px 25%;
    color: #fff;
    background-color:#231f20;
    border:none;
    border: 3px solid #231f20;
    border-radius: 10px;
    &:hover{
        background: #fff;
        border: 3px solid #8D60F5;
        cursor: pointer;
        color: #8D60F5;
    }
`
export const Img = styled.img`
    width: 320px;
    height: 100px;
    size: cover;
    margin: 50px 12% 20px 12%;
`