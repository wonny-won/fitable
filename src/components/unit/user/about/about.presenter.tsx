import Head from "next/head"
import FitableLogo from "../../../commons/atom/user/logo/logo.presenter"
import * as S from './about.style'
import { onClickPayment } from "../../../../commons/util/functions/payments"

export default function AboutUI(){
    return(
        <>
        <Head>
            <title>about program | fitable</title>
            <meta charSet="UTF-8" />
            <meta name="description" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
            <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
            {/* {/* 결제 - jQuery */}
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
            {/* 결제 - iamport.payment.js */}
            <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script> 

        </Head>
        <S.Container>
            <FitableLogo fontSize="40px" />
            <h1 style={{display:"none"}}>fitable 프로그램 소개</h1>
            <h2 style={{display:"none"}}>fitable 소개</h2>
            <S.IntroSection>
                <S.Logo src="/logo2.png"/>
               <S.IntroTitle>' fitable 고객과의 약속 '</S.IntroTitle>
               <S.Promise> <S.PromiseSpan>첫째 .</S.PromiseSpan> 고객과 끊임없는 <S.PromiseSpan>소통</S.PromiseSpan>을 추구합니다.</S.Promise>
               <S.Promise><S.PromiseSpan>둘째 .</S.PromiseSpan> 지정 담당자와의 1 : 1 <S.PromiseSpan>프라이빗 관리</S.PromiseSpan></S.Promise>
               <S.Promise><S.PromiseSpan>셋째 .</S.PromiseSpan> 꼼꼼한 프로그램 결과체크.</S.Promise>
               <S.Promise><S.PromiseSpan>넷째 .</S.PromiseSpan> 지속적인 <S.PromiseSpan>프로그램 연구</S.PromiseSpan>와 업데이트.</S.Promise>
            </S.IntroSection>
            <h2 style={{display:"none"}}>다이어트 프로그램</h2>
            <S.DietSection>
               <S.ProgramWrap>
                    <S.Program>Diet program</S.Program>
                    <div>
                        고객님의 목표와 이유를 기반으로 프로그램 진행
                    </div>
                    <div onClick={onClickPayment}>프로그램 신청하기</div>
               </S.ProgramWrap>
               <S.Img src="/dietprogram.jpg" alt="dietprogram"/>
            </S.DietSection>
            <h2 style={{display:"none"}}>힐링 프로그램</h2>
            <S.HealingSection>
                <S.Img src="/healingprogram.jpg" alt="healingprogram"/>
                <S.ProgramWrap>
                    <S.Program>Healing program</S.Program>
                    <div>
                        고객님의 현재 체형과 상태를 기반으로 프로그램 진행
                    </div>
                    <div onClick={onClickPayment}>프로그램 신청하기</div>
                </S.ProgramWrap>
            </S.HealingSection>

        </S.Container>
        </>
    )
}