import Head from "next/head"
import * as S from './list.style'
import { ReviewListPresenterProps } from "./list.type"
import ListCard from "../../../../commons/atom/user/reviewListCard/listCard"
import Pagination from "../../../../commons/atom/user/pagination/pagination"

export default function ReviewListUI(props:ReviewListPresenterProps){
    return(
        <>
        <Head>
        <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title> Program Review | fitable</title>
        </Head>
        <h1 style={{display:"none"}}>프로그램 리뷰</h1>
        <S.Container>  
        <h2 style={{display:"none"}}>상위리뷰</h2>
        <S.TopReview>
            <S.TopReviewTitle>Top3 명예의 전당</S.TopReviewTitle>
            <S.Text>가장 도움이 됐던 Top3 리뷰들! 지금 바로 확인하세요.</S.Text>
            <S.TopReviewWrap> <ListCard topReview={props.topREview} isEdit={false}/> </S.TopReviewWrap>
            <S.RankingImg src='/apply.png'/>
        </S.TopReview>
        <h2 style={{display:"none"}}>모든 리뷰</h2>
        <S.AllReviewWrap>
            <S.RviewWrap>
                <ListCard data={props.data} isEdit={false}/>
            </S.RviewWrap>
            <div><Pagination currentPage={props.currentPage} startPage={props.startPage} onClickNextPage={props.onClickNextPage} onClickPage={props.onClickPage} onClickPrevPage={props.onClickPrevPage} data={props.data} lastPage={props.lastPage}/></div>
        </S.AllReviewWrap>
        </S.Container>
        </>
    )
}