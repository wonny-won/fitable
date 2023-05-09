import styled from "@emotion/styled";

export const NumberWrap = styled.div`
    display: flex;
    width: 300px;
    height: 25px;
    justify-content: space-around;
    align-items: center;
`
export const Bt = styled.div`
    &:hover{
        cursor: pointer;
    }
`
export const PageBt = styled(Bt)`
    &:hover{
        font-size: 23px;
        color: #8d60f5;
    }
`