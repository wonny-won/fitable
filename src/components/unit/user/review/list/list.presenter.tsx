import { getDatas } from "../../../../../commons/util/functions/firebaseFunctions"
import { useEffect, useState } from "react"
import Head from "next/head"
import * as S from './list.style'
import { ReviewListPresenterProps } from "./list.type"
import UseModal from "../../../../commons/atom/user/modal/modal.container"

export default function ReviewListUI(props:ReviewListPresenterProps){
    const [data,setData] =useState<any[]>([])
   useEffect(()=>{
    getDatas("programReview").then((res)=>{setData(res)})
   },[])
    return(
        <>
        <Head>
            <meta name="온라인PT,프리미엄 관리" content="코로나시대 관리도 집에서! 프리미엄 온라인 PT"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title> Program Review | fitable</title>
        </Head>
        <h1 style={{display:"none"}}>프로그램 리뷰</h1>
        <S.Container>  
        {/* <h2>상위랭킹 리뷰</h2> */}
        <h2 style={{display:"none"}}>모든 리뷰</h2>
        {
            data?.map((item)=>(
                <S.CardWrap onClick={props.onClickOpenModal}>
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
                                <S.ReviewListStar value={item.data.realvalue} disabled/>
                                 <S.Span/>{ item.data.realvalue}
                            </div>
                        </S.InfoMinWrap>
                    </S.ProgramInfo>
                </S.CardWrap>
            ))
        }
        <UseModal isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen}/>
        </S.Container>
        </>
    )
}