import * as S from './nav.style'
import { NavProps } from './nav.type'

export default function NavBarUI(props:NavProps){
    return(
        <S.Wrapper isActive={props.isActive}>
        <S.Container isActive={props.isActive}>  
            <S.HamburgerMenuWrap onClick={props.onClickMenuBt}>
                <S.HamburgerMenu/>
            </S.HamburgerMenuWrap>          
            <S.LogoWrap>
                <S.LOGO src='/logo.png'/>
            </S.LogoWrap>
            <S.IconWrap>
                <S.MyPageIcon />
                <S.SearchIcon />
            </S.IconWrap>
        </S.Container>
        <S.MenuDetailWrap isActive={props.isActive}>
            <S.MenuWrapper>
            <div>
                <ul>
                    <S.A href="/"><S.Li>HOME</S.Li></S.A>
                    <S.A href="/about"><S.Li>ABOUT</S.Li></S.A>
                    <S.A href="/review"><S.Li>PROGRAM REVIEW</S.Li></S.A>
                    <S.Li>유형별 프로그램 추천</S.Li>
                </ul>
            </div>
            <S.MiniMenuWrap>
                <ul>
                    {/* logout 함수 적용 못함 */}
                    <S.MiniLi onClick={props.isLogin ? props.signOut : props.routing('/joinus')}>{props.isLogin ? "LOGOUT":"LOGIN / JOIN US" }</S.MiniLi>
                    <S.MiniLi>MY PAGE</S.MiniLi>
                </ul>
            </S.MiniMenuWrap>
            </S.MenuWrapper>
        </S.MenuDetailWrap>
        </S.Wrapper>
    )
}