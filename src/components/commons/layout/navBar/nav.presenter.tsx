import * as S from './nav.style'

export default function NavBarUI(){
    return(
        <S.Container>
            <S.HamburgerMenu />
            <S.IconWrap>
                <S.MyPageIcon />
                <S.SearchIcon />
            </S.IconWrap>
        </S.Container>
    )
}