import styled from "@emotion/styled";

interface Params {
    currentPage: number;
    page: number
}
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
    color : ${(props:Params)=> {
        return props.currentPage===props.page && 'red'}};
    &:hover{
        font-size: 23px;
        color: #8d60f5;
    }
`