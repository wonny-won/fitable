import styled from "@emotion/styled"

const TitleText = styled.div`
    display: flex;
    font-size: 35px;
    color : #8D60F5;
    font-weight: 700;
    margin: 10px 0;
`
const Span = styled.span`
    margin : 30px 20px;
`
export default function FitableLogo(){
    return <TitleText>f<Span/>i<Span/>t<Span/>a<Span/>b<Span/>l<Span/>e</TitleText>
}