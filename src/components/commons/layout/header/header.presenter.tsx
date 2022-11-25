import * as S from './header.style'
export default function HeaderUI(){

    return(
        <>
            <S.HeaderWrapper>
                <div> Fit Your Life </div>
                <S.MenuWrapper>
                    <S.MenuLi>다이어트 프로그램</S.MenuLi>
                    <S.MenuLi>건강관리 프로그램</S.MenuLi>
                    <S.MenuLi>맞춤 프로그램 진단</S.MenuLi>
                    <S.MenuLi>보조제 마켓</S.MenuLi>
                </S.MenuWrapper>
                <div>
                    <div> 검색 </div>
                    <div> 마이페이지 </div>
                </div>
            </S.HeaderWrapper>
        </>
    )
}