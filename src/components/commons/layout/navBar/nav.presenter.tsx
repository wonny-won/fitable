import * as S from './nav.style'
import { NavProps } from './nav.type'

export default function NavBarUI(props:NavProps){
    return(
        <S.Wrapper>
        <S.Container isActive={props.isActive}>  
            <S.HamburgerMenuWrap onClick={props.onClickMenuBt}>
                <S.HamburgerMenu/>
            </S.HamburgerMenuWrap>          
            <S.LogoWrap>
                <S.LOGO src='/logo.png'/>
            </S.LogoWrap>
            <S.IconWrap>
                <S.MyPageIcon onClick={props.routing('/mypage')}/>
                <S.SearchIcon />
            </S.IconWrap>
        </S.Container>
        <S.MenuDetailWrap isActive={props.isActive}>
            <S.MenuWrapper>
            <div>
                <ul>
                    <S.A href="/"><S.Li>HOME</S.Li></S.A>
                    <S.A href="/apply"><S.Li>APPLY</S.Li></S.A>
                    <S.A href="/review"><S.Li>REVIEW</S.Li></S.A>
                    <S.Li>유형별 프로그램 추천</S.Li>
                </ul>
            </div>
            <S.MiniMenuWrap>
                <ul>
                    <S.MiniLi onClick={props.isLogin!=='로그인 하지 않은 유저입니다.' ? props.signOut : props.routing('/joinus')}>{props.isLogin!=='로그인 하지 않은 유저입니다.' ? "LOGOUT":"LOGIN / JOIN US" }</S.MiniLi>
                    <S.A href="/mypage"><S.MiniLi>MY PAGE</S.MiniLi></S.A>
                </ul>
            </S.MiniMenuWrap>
            </S.MenuWrapper>
        </S.MenuDetailWrap>
        </S.Wrapper>
    )
}