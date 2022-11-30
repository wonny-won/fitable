import * as S from './header.style'
export default function HeaderUI(){

    return(
        <>
            <S.HeaderWrapper>
                <S.MenuWrapper>
                    <S.MenuLi>프로그램 상담</S.MenuLi>
                    <S.MenuLi>맞춤 프로그램 진단</S.MenuLi>
                    <S.MenuLi>스토어</S.MenuLi>
                </S.MenuWrapper>
                <S.MiniMenuWrap>
                    <S.Img src='/search.svg'/>
                    <S.Img src='/shoppingback.svg'/>
                </S.MiniMenuWrap>
            </S.HeaderWrapper>
        </>
    )
}