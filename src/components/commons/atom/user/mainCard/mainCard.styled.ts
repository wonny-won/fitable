import styled from "@emotion/styled"

export const CardWrap = styled.div`
    align-items: center;
    width: 400px;
    height: 450px;
`
export const ProgramCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
    background-image: url(${props=>props.image});
    background-size: cover;
    border-radius: 30px;
`
export const CardTitle = styled.div`
    font-size: 36px;
    font-weight: 400;
    color: #fff;
`
export const ExplainBT = styled.button`
    width : 63px;
    height: 40px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    margin-top: 20px;
    color : #fff;
    font-size: 16px;
`