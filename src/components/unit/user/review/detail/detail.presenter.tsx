import StarRate from "../../../../commons/atom/user/starRate/starRate";
import * as S from './detail.style'
import { ReviewDetailPresenter } from "./detail.type";
import Carousel from "../../../../commons/atom/user/carousel/carousel.container";
import { onClickhelpfulBt } from "./detailFn/onClickhelpfulBt"; 
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing";
import DOMPurify from "dompurify";

export default function ReviewDetaillUI(props:ReviewDetailPresenter){
    const routerHooks = useRoutingPageHooks()
    return(
        <S.Container>
        <S.H1>리뷰 디테일</S.H1>
        <div>
        <S.H2>리스트 페이지 가기</S.H2>
        <S.GoBackWrap onClick={routerHooks('/review')}>
            <S.Goback src="/backIcon.png" />
            <S.GobackText>리뷰 리스트</S.GobackText>
        </S.GoBackWrap>
        <S.H2>리뷰 사진 캐러셀</S.H2>
        <S.CarouselSection>
            <Carousel file={props.data?.fileName}/>
        </S.CarouselSection>
        </div>
        <S.H2>리뷰 상세</S.H2>
        <S.Section>
            <S.ProgramTilte>{props.data?.program}</S.ProgramTilte>
            <S.H3>작성자및 평점</S.H3>
            <S.UserWrap>
                <S.UserProfile>
                    <S.UserProfileImg src={props.data?.writerProfile}/>
                    <div>{props.data?.writer} <S.UserNameSpan>님의 리뷰입니다.</S.UserNameSpan></div>
                </S.UserProfile>
                <S.OverAll> <S.OverAllSpan>한줄평</S.OverAllSpan> | {props.data?.overAll}</S.OverAll>
                <StarRate value={props.data?.starValue} disable={true}/>
            </S.UserWrap>
           { props.data?.reviewContents ? <S.Content dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize(props.data?.reviewContents) }} /> : '' }  
           <S.HelpfulWrap>
                <S.Helpful onClick={onClickhelpfulBt(props.docId,'likeCount')}> <S.Like/> 도움돼요 {props.data?.likeCount}</S.Helpful>
                <S.Helpful onClick={onClickhelpfulBt(props.docId,'dislikeCount')}> <S.DisLike/> 도움안돼요 {props.data?.dislikeCount}</S.Helpful>
           </S.HelpfulWrap>
          <S.Line />
        </S.Section>
        </S.Container>
    )
}