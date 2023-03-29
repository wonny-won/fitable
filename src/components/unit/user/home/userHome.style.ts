import styled from "@emotion/styled";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'LOTTERIACHAB';
    font-size: 25px;
    font-weight: 300;
`
export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    align-items: center;
`
export const CardsWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 150px 170px;
    margin: 0 auto;
    width:100%;
    background-color: #FFE100;
    background-image: url('/frame.png');
    background-size: cover;
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
export const Img = styled.img`
    width: 300px;
    height: 300px;
    size: cover;
    text-align: center;
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