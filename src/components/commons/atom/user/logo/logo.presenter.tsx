import * as S from './logo.style'
interface LogoProps {
    fontSize: string;
}
export default function FitableLogo(props:LogoProps){
    return <S.TitleText fontSize={props.fontSize}>f<S.Span/>i<S.Span/>t<S.Span/>a<S.Span/>b<S.Span/>l<S.Span/>e</S.TitleText>
}