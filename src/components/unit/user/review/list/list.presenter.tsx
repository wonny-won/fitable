import Head from "next/head"
import * as S from './list.style'
import { ReviewListPresenterProps } from "./list.type"
import UseModal from "../../../../commons/atom/user/modal/modal.container"

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
        {/* <h2>상위랭킹 리뷰</h2> */}
        <h2 style={{display:"none"}}>모든 리뷰</h2>
        {
            props.data?.map((item)=>(
                <S.CardWrap onClick={props.onClickOpenModal} key={item.id} id={item.id}>
                    {
                        item.data.image ? (<S.Image>{item.data.image}</S.Image>):(<S.NoImg src="/fitable.png" />)
                    }
                    <S.OneSentenceExplain>{item.data.OneSentenceExplain}</S.OneSentenceExplain>
                    <S.ProgramInfo>
                        {
                           item.data.program==="Healing program" ? (<S.ProgramImage src="/healingprogram.svg"/>) : (<S.ProgramImage src="/dietprogram.svg"/>) 
                        }
                        <S.InfoMinWrap>
                            <div>{item.data.program}</div>
                            <div>
                                <S.ReviewListStar value={item.data.realvalue} />
                                 <S.Span/>{ item.data.realvalue}
                            </div>
                        </S.InfoMinWrap>
                    </S.ProgramInfo>
                </S.CardWrap>
            ))
        }
        <UseModal reviewId={props.reviewId} isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen}/>
        </S.Container>
        </>
    )
}