import Head from "next/head"
import { SignUpPresenter } from "./signUp.type"
import * as S from './signUp.style'
import FitableLogo from "../../../commons/atom/user/logo/logo.presenter"

export default function SignUpUI(props:SignUpPresenter){
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
                <S.InputTitle>이메일</S.InputTitle>
                <S.Input type="text" id="email"  placeholder="이메일을 입력해주세요." onChange={props.onChangeInput} />
                <S.ErrorMS>{props.emailError}</S.ErrorMS>
                <S.InputTitle style={{display:"flex"}}>
                    <div>비밀번호</div> 
                    <S.PwCondition >
                        <S.Length signUpInput={props.signUpInput}>6자이상</S.Length>
                        <S.IncludesNumber schema={props.schema} signUpInput={props.signUpInput}>숫자포함</S.IncludesNumber>
                        <span>영문포함</span>
                    </S.PwCondition>
                </S.InputTitle>
                <S.Input type="password" id="password"  placeholder="비밀번호를 입력해주세요." onChange={props.onChangeInput} />
                <S.ErrorMS/>
                <S.InputTitle>비밀번호 확인</S.InputTitle>
                <S.Input type="password" id="passwordCheck" placeholder="비밀번호 확인" onChange={props.onChangeInput}/>
                <S.ErrorMS>{props.passwordError}</S.ErrorMS>
                <S.SubmitBt onClick={props.onSubmit}> 회원가입하기 </S.SubmitBt>
            </S.InputWrap>
        </S.Container>
    )
}