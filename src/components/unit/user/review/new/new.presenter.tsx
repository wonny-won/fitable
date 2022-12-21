import Head from "next/head";
import FitableLogo from "../../../../commons/atom/user/logo/logo.presenter";
import * as S from './new.style'
import { NewReview } from "./new.types";

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
            <S.Span>리뷰 추첨을 통해 3분께 2만원 적립금을 드립니다.</S.Span>
        </S.TitleWrap>
        <form onSubmit={props.handleSubmit(props.onClickBtSubmit)}>
            작성자 : <input type="text" {...props.register("writer")}/>
            비밀번호 : <input type="password" {...props.register("password")}/>
            내용 : <input type="text" {...props.register("contents")}/>
            <button>등록하기</button>
        </form>
        </>
    )
}