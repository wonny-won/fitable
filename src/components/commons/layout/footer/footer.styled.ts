import styled from "@emotion/styled";

export const FooterWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color : black;
    font-size: 10px;
    font-weight: 200;
    margin: auto;
    padding: 130px;
    background-color: #fff;
`
export const RelateSite = styled.div`
    width : 280px;
    display: flex;
    justify-content: space-between;
`
export const H3 = styled.a`
    font-weight: 200;
    font-size: 13px;
    padding : 10px 0 10px 2px;
    text-decoration: none;
    color: black;
    &:hover{
        cursor: pointer;
        color : #8D60F5;
        font-weight: 400;
    }
`
