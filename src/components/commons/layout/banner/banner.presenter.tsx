import * as S from './banner.style'
export default function Banner (){
    return(
        <>
            <h1 style={{display:"none"}}>fitable 소개</h1>
            <S.TextWrap>
                <S.MainText>당신의 몸을 위한 <S.TextSpan>최선의 선택</S.TextSpan></S.MainText>
                <S.TitleText>f<S.Span/>i<S.Span/>t<S.Span/>a<S.Span/>b<S.Span/>l<S.Span/>e</S.TitleText>
                <div>건강관리도 프리미엄의 시대, 집에서 <S.TextSpan>내게 맞는 진짜 관리</S.TextSpan>를 받아보세요</div>
            </S.TextWrap>

        </>
    )
}