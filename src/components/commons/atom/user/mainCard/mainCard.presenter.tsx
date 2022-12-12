import * as S from './mainCard.styled'
import { MainCardProps } from './mainCard.types'
import Head from 'next/head'

declare const window: typeof globalThis & {
    IMP: any;
  };

export default function MainCardUI(props:MainCardProps){

    return(
        <>
            <Head>
                {/* 결제 - jQuery */}
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
                {/* 결제 - iamport.payment.js */}
                <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>
            </Head>
            <h1 style={{display: "none"}}>프로그램 카드</h1>
                <S.CardWrap>
                    <S.FrontProgramCard image={props.image}>
                    <S.CardTitle>
                        {
                            props.image === '/dietprogram.svg' ? "Diet program" : "Healing program"
                        }
                    </S.CardTitle>
                    <S.ExpreienceBT>프로그햄 확인하기</S.ExpreienceBT>
                    </S.FrontProgramCard>

                    <S.BackProgramCardWrap >
                        <S.BackCardInner>
                            <S.TextArea>
                                <S.Text> <S.TextSpan>담당 전문가 </S.TextSpan>와의 상담을 통해</S.Text>
                                <S.Text>현재 몸상태를 진단후</S.Text>
                                <S.Text>주단위로 <S.TextSpan>맞춤형 운동루틴 </S.TextSpan>과 <S.TextSpan>식단 </S.TextSpan>을 병행합니다.</S.Text>
                            </S.TextArea>
                            <S.ExpreienceBT onClick={props.onClickPayment}>체험하기</S.ExpreienceBT>
                        </S.BackCardInner>
                    </S.BackProgramCardWrap>
                </S.CardWrap>
        </>
    )
}