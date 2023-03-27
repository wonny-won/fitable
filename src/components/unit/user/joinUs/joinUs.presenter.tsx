import Head from "next/head"
import FitableLogo from "../../../commons/atom/user/logo/logo.presenter"
import * as S from './joinUs.style'
import { JoinUsPresenter } from "./joinUs.type"

export default function JoinUsUI(props:JoinUsPresenter){
    return(
        <S.Contatiner>
        <Head>
        <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
            <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
            <title> Join us | fitable </title> 
        </Head>
        <h1 style={{display:"none"}}> 회원가입 및 로그인 </h1>
        <S.Title>  J o i n <S.Span/>  U s </S.Title>
        <FitableLogo fontSize="40px"/>
        <S.ContentsWrap>
        <S.LoginBox>
            <S.SginUPIN>회원 로그인</S.SginUPIN>
            <section>
            <S.SginUPINExplain>가입하신 아이디와 비밀번호를 입력해주세요.<br/>비밀번호는 대소문자를 구분합니다.</S.SginUPINExplain>
            <S.Input type="text" id= "email" placeholder="MEMBER ID" color="#fff" border="#adadad" onChange={props.onChangeInput}/>
            <S.Input type="password" id="password" placeholder="PASSWORD" color="#fff" border="#adadad" onChange={props.onChangeInput}/>
            <S.LoninBT onClick={props.onClickLogIn}>LOG-IN</S.LoninBT>
            </section>
        </S.LoginBox>
        <S.JoinUsBox>
            <S.SginUPIN> 회원가입 </S.SginUPIN>
            <section>
                <S.SginUPINExplain>아직 회원이 아니신가요?<br/>회원가입을 하시면 다양한 혜택을  편리하게 이용하실 수 있습니다.</S.SginUPINExplain>
                <S.BTForm onClick={props.router('/signup')}>JOIN-US</S.BTForm>
                <S.ForgotIDPWWrap>
                <S.SginUPINExplain>아이디 혹은 비밀번호를 잊으셨나요?<br/>간단한 정보를 입력 후 잃어버린 정보를 찾으실 수 있습니다.</S.SginUPINExplain>
                <S.BTForm>ID/PASSWORD</S.BTForm>
                </S.ForgotIDPWWrap>
            </section>
        </S.JoinUsBox>
        </S.ContentsWrap>
        </S.Contatiner>
    )
}