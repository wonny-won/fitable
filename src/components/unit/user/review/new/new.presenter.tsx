import Head from "next/head";
import FitableLogo from "../../../../commons/atom/user/logo/logo.presenter";
import * as S from './new.style'
import { NewReview } from "./new.types";
import StarRate from "../../../../commons/atom/user/starRate/starRate";

export default function NewReviewUI(props:NewReview){
    return(
        <>
        <Head>
            <title>fitable | 온라인 프로그램 리뷰</title>
            <meta name="프리미엄 온라인 관리 fitable" content="온라인 프로그램 리뷰" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <S.TitleWrap>
            <FitableLogo />
            <div>온라인 관리의 <S.TextSpan>생생한 후기</S.TextSpan> 를 들려주세요!</div>
            <S.Span>리뷰 추첨을 통해 3분께 <S.MiniSpan>2만원 적립금</S.MiniSpan> 을 드립니다.</S.Span>
        </S.TitleWrap>
        <S.Line/>
        <S.ContentsWrap>
            <form onSubmit={props.handleSubmit(props.onClickBtSubmit)}>
                    <S.ExplainWrap>
                        <S.H1>프로그램 선택</S.H1>
                        <S.H2>진행 하신 프로그램을 선택해주세요.</S.H2>
                    </S.ExplainWrap>
                    <S.WrapSection>
                        <S.Div> <input type="radio" id="Diet program" /> Diet program </S.Div>
                        <S.Div> <input type="radio" id="Healing program" /> Healing program </S.Div>
                        <div> <input type="radio" id="Diet program & Healing program" /> Diet program & Healing program </div>
                    </S.WrapSection>
                <S.ExplainWrap>
                    <S.H1>프로그램 만족도</S.H1>
                    <S.H2>진행 하신 프로그램 , 얼마나 만족하셨나요?</S.H2> 
                </S.ExplainWrap>
                <S.WrapSection>
                    <StarRate />
                </S.WrapSection>
                <S.ExplainWrap>
                    <S.H1>프로그램 생생후기</S.H1>
                    <S.H2>들려주세요. 당신의 생생한 후기를.</S.H2> 
                </S.ExplainWrap>
                <S.WrapSection>
                    <h3>포토리뷰를 작성해주시는 분깨는 3만원의 적립금을 드립니다.</h3>
                    <div>+</div>
                </S.WrapSection>


                <button>등록하기</button>
            </form>
        </S.ContentsWrap>
        </>
    )
}