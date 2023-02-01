import * as S from './nav.style'
import { NavProps } from './nav.type'

export default function NavBarUI(props:NavProps){
    return(
        <S.Wrapper>
        <S.Container isActive={props.isActive}>
            <S.HamburgerMenu onClick={props.onClickMenuBt}/>
            <S.IconWrap>
                <S.MyPageIcon />
                <S.SearchIcon />
            </S.IconWrap>
        </S.Container>
        <S.MenuDetailWrap isActive={props.isActive}>
            <S.MenuWrapper>
            <div>
                <ul>
                    <S.Li><S.A href="/">HOME</S.A></S.Li>
                    <S.Li>ABOUT</S.Li>
                    <S.Li><S.A href="/review">PROGRAM REVIEW</S.A></S.Li>
                    <S.Li>프로그램신청</S.Li>
                    <S.Li>유형별 프로그램 추천</S.Li>
                </ul>
            </div>
            <S.MiniMenuWrap>
                <ul>
                    <S.MiniLi><S.A href="/joinus">LOGIN / JOIN US</S.A></S.MiniLi>
                    <S.MiniLi>MY PAGE</S.MiniLi>
                </ul>
            </S.MiniMenuWrap>
            </S.MenuWrapper>
        </S.MenuDetailWrap>
        </S.Wrapper>
    )
}