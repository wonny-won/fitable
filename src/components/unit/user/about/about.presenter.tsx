import Head from "next/head"
import FitableLogo from "../../../commons/atom/user/logo/logo.presenter"
import * as S from './about.style'

export default function AboutUI(){
    return(
        <>
        <Head>
            <title>about program | fitable</title>
            <meta charSet="UTF-8" />
            <meta name="description" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
            <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
        </Head>
        <S.Container>
            <FitableLogo fontSize="40px" />
            <h1 style={{display:"none"}}>fitable 프로그램 소개</h1>
            <h2 style={{display:"none"}}>fitable 소개</h2>
            <S.IntroSection>
                여기는 소개 섹션 뭘 넣어볼까
            </S.IntroSection>
            <h2 style={{display:"none"}}>다이어트 프로그램</h2>
            <S.DietSection>
               <S.ProgramWrap>여기엔 설명을 넣을거고</S.ProgramWrap>
               <S.Img src="/dietprogram.svg"/>
            </S.DietSection>
            <h2 style={{display:"none"}}>힐링 프로그램</h2>
            <S.HealingSection>
                <S.Img src="/healingprogram.svg"/>
                <S.ProgramWrap>여기엔 설명을 넣을거고</S.ProgramWrap>
            </S.HealingSection>

        </S.Container>
        </>
    )
}