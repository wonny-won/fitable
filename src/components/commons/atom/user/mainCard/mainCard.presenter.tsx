import * as S from './mainCard.styled'
import { MainCardProps } from './mainCard.types'
import Head from 'next/head'
import UseModal from "../modal/modal.container"
import { useState } from 'react';


declare const window: typeof globalThis & {
    IMP: any;
  };

export default function MainCardUI(props:MainCardProps){
    return(
        <>
            <Head>
                {/* 결제 - jQuery
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
                {/* 결제 - iamport.payment.js */}
                {/* <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script> */} 
            </Head>
            <h1 style={{display: "none"}}>프로그램 카드</h1>
                <S.CardWrap>
                    {/* 카드 앞면 */}
                    <S.FrontProgramCard isClick={props.isClick}>
                    <S.ExplainTitle>
                        {
                            props.title === '포트폴리오 피드백' ? "'끝내주는'" : "'한번에 착-붙는'"
  
                        }
                    </S.ExplainTitle>
                    <S.CardTitle>
                        {
                            props.title === '포트폴리오 피드백' ? "포트폴리오 피드백" : "이력서 피드백"
                        }
                    </S.CardTitle>
                    <S.ExpreienceBT onClick={props.onClickRotateCard}>프로그햄 확인하기</S.ExpreienceBT>
                    </S.FrontProgramCard>

                    {/* 카드 뒷면 */}
                    <S.BackProgramCardWrap isClick={props.isClick}>
                        <div>뒷 면 이 나 오 는 지 확 인 할 거 야</div>
                        <S.ExpreienceBT onClick={props.onClickRotateCard}>프로그햄 확인하기</S.ExpreienceBT>

                    </S.BackProgramCardWrap>
                </S.CardWrap>
        </>
    )
}