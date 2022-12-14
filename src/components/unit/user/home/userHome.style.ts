import styled from "@emotion/styled";

export const CardsWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width:900px;
`
export const TextWrap = styled.section`
    color : #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin : 130px 0; 
    font-size: 19px;
    font-weight: 300;
`
export const MainText = styled.h2`
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 300;
`
export const TextSpan = styled.span`
    font-weight: 600;
`
export const TitleText = styled.h2`
    display: flex;
    font-size: 35px;
    color : #8D60F5;
    font-weight: 700;
    margin: 10px 0;
`
export const Span = styled.span`
    margin : 30px 20px;
`
export const SelfTestWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    color : #fff;
    font-size: 20px;
    font-weight: 300;
`
export const SelfTestBT = styled.button`
    background-color: transparent;
    color : #fff;
    padding: 10px 22px;
    margin-left: 30px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 5px;
    border: 1px solid #fff;
    &:hover{
        cursor: pointer;
        color : #8D60F5;
        border-color: #8D60F5;
    }
`
export const Hr = styled.hr ` 
    width: 50px;
    background: rgba(255,255,255,0.3);
    height: 1px;
    border: 0;
    margin: 20px auto;
`