import styled from "@emotion/styled"

export const CardWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
`
export const ProgramCard = styled.div`
    width: 400px;
    height: 450px;
    background-image: url(${props=>props.image});
    background-size: cover;
`
export const CardTitle = styled.div`
    font-size: 26px;
    font-weight: 400;
`