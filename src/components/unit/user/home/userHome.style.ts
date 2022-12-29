import styled from "@emotion/styled";

export const CardsWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width:900px;
`
export const SelfTestWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    color : black;
    font-size: 20px;
    font-weight: 300;
`
export const SelfTestBT = styled.button`
    background-color: transparent;
    color : black;
    padding: 10px 22px;
    margin-left: 30px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 5px;
    border: 1.5px solid black;
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