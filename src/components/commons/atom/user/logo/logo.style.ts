import styled from "@emotion/styled";

interface EmotionProps {
    fontSize : string;
}
export const TitleText = styled.div`
    display: flex;
    font-size: ${(props:EmotionProps)=>props.fontSize};
    color : #8D60F5;
    font-weight: 700;
    margin: 10px 0;
    font-family: 'LOTTERIACHAB';
    padding-bottom: 20px;
`
export const Span = styled.span`
    margin : 30px 20px;
`
