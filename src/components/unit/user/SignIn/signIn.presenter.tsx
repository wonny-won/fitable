import Head from "next/head"
import { SignInPresenter } from "./signIn.type"
import * as S from './signIn.style'
import FitableLogo from "../../../commons/atom/user/logo/logo.presenter"

export default function SignInUI(props:SignInPresenter){
    return(
        <S.Container>
        <Head>
            <meta name="description" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>회원가입 | fitable</title>
        </Head>
            <FitableLogo fontSize="45px"/>
            <S.Title>회원정보 입력</S.Title>
            <S.Line/>
            <S.InputWrap>
                <S.Input type="text" id="email"  placeholder="이메일을 입력해주세요." onChange={props.onChangeInput} />
                <S.Input type="text" id="password"  placeholder="비밀번호를 입력해주세요." onChange={props.onChangeInput} />
                <S.Input type="text"  placeholder="비밀번호 확인" />
                <S.SubmitBt onClick={props.onSubmit}> 회원가입하기 </S.SubmitBt>
            </S.InputWrap>
        </S.Container>
    )
}