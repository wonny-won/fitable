import Head from "next/head";
import FitableLogo from "../../../../commons/atom/user/logo/logo.presenter";
import * as S from './new.style'
import { NewReview } from "./new.types";
import StarRate from "../../../../commons/atom/user/starRate/starRate";
import Button from "../../../../commons/atom/user/button/button";

export default function NewReviewUI(props:NewReview){
    return(
        <>
        <Head>
            <title>fitable | 온라인 프로그램 리뷰</title>
            <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <h1 style={{display:'none'}}> 리뷰 등록페이지 </h1>
        <S.Container>
        <S.LeftWrap>
        <S.H2>썸네일 미리보기</S.H2>
        <S.ThumbnailSection>
            <S.ThumbnailImg src='/tutorMascot.png'/>
            <S.ProgramReviewWrap>
            <div>{props.program}</div>
            <S.ReviewStar value={3}/>
            </S.ProgramReviewWrap>
        </S.ThumbnailSection>
        <S.ExtendsH2>이미지 등록</S.ExtendsH2>
        <S.Section>
        <S.UploadBt htmlFor="fileTag">+</S.UploadBt>
        <input type='file' id='fileTag' hidden/>
        </S.Section>
        <S.ExtendsH2>프로그램 총평</S.ExtendsH2>
        <section>
        <S.ReviewStar value={3}/>
        <S.OverallInput type='text'/>
        </section>
        </S.LeftWrap>
        <S.RigthWrap>
        <S.H2>자세한 리뷰는 여기에 적어주세요.</S.H2>
        <section>
            <textarea rows={30} cols={40}/>
        </section>
        <S.BtWrap>
            <S.Botton>등록하기</S.Botton>
            <S.Botton>취소하기</S.Botton>
        </S.BtWrap>
        </S.RigthWrap>
        </S.Container>
        </>
    )
}