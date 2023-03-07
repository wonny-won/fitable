import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    align-self: start;
    justify-content: center;
`
export const Title = styled.h1`
    font-size: 22px;
    font-weight: 400;
    padding: 15px 0;
    border-bottom: 1px solid #000;
    margin-bottom: 15px;
`
export const H1 = styled.h1`
    font-size: 17px;
    font-weight: 400;
    width: 15%;
    background-color: #f8f8f8;
    padding: 20px 0 20px 20px;
    margin: 0;
`
export const Span = styled.span`
    color: red;
`
export const MiniWrap = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ddd;
    align-items: center;
`
export const MiniWrapTop = styled(MiniWrap)`
    border-top: 1px solid #ddd ;
`
export const Input = styled.input`
    width: 287px;
    height: 31px;
    border: 1px solid #ddd;
    margin: 0 20px;
`