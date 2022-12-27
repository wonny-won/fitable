import Head from "next/head";
import FitableLogo from "../../../../commons/atom/user/logo/logo.presenter";
import * as S from './new.style'
import { NewReview } from "./new.types";
import UseStarRate from "../../../../commons/atom/user/starRate/starRate";
import Button from "../../../../commons/atom/user/button/button";

export default function NewReviewUI(props:NewReview){
    const { starRateRender } = UseStarRate()
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
                        <S.Div> <input type="radio" id="Diet program" onChange={props.onClickGetProgramValue} name="program"/> Diet program </S.Div>
                        <S.Div> <input type="radio" id="Healing program" onChange={props.onClickGetProgramValue} name="program"/> Healing program </S.Div>
                        <div> <input type="radio" id="Diet program & Healing program" onChange={props.onClickGetProgramValue} name="program"/> Diet program & Healing program </div>
                    </S.WrapSection>
                <S.ExplainWrap>
                    <S.H1>프로그램 만족도</S.H1>
                    <S.H2>진행 하신 프로그램 , 얼마나 만족하셨나요?</S.H2> 
                </S.ExplainWrap>
                <S.WrapSection>
                    {starRateRender}
                </S.WrapSection>
                <S.ExplainWrap>
                    <S.H1>프로그램 한줄평</S.H1>
                    <S.H2>프로그램을 한 문장으로 설명한다면?</S.H2> 
                </S.ExplainWrap>
                <S.WrapSection>
                    <S.OneSentanceExplainInput type="text" {...props.register("OneSentenceExplain")}/>
                </S.WrapSection>
                <S.ExplainWrap>
                    <S.H1>프로그램 생생후기</S.H1>
                    <S.H2>들려주세요. 당신의 생생한 후기를.</S.H2> 
                </S.ExplainWrap>
                <S.WrapSection>
                    <h3 style={{display:"none"}}>사진 업로드</h3>
                        <S.ImageText>포토리뷰를 작성해주시는 분깨는 3만원의 적립금을 드립니다.</S.ImageText>
                        <S.ImageUploadWrap>
                            <S.FileTag htmlFor="fileTag" >+</S.FileTag>
                            <input type="file" id="fileTag" hidden={true}  onChange={props.onChangeFile}/>
                        </S.ImageUploadWrap>
                    <h3 style={{display:"none"}}>텍스트 후기 작성</h3>
                        <S.TextArea rows={20} cols={70} {...props.register("realReview")}/>
                </S.WrapSection>
                <h1 style={{display:"none"}}>후기 등록하기</h1>
                <S.WrapSection>
                    <Button contents={"등록하기"}
                            color={"#8D60F5"}/>
                </S.WrapSection>
            </form>
        </S.ContentsWrap>
        </>
    )
}