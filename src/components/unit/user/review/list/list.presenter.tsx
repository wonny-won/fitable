import { getDatas } from "../../../../../commons/util/functions/firebaseFunctions"
import { useEffect, useState } from "react"
import Head from "next/head"
import * as S from './list.style'

export default function ReviewListUI(){
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
                <S.CardWrap>
                    <div>{item.data.OneSentenceExplain}</div>
                    <div>{item.data.program}</div>
                    <div>{item.data.image}</div>
                    <div>{item.data.realvalue}</div>
                </S.CardWrap>
            ))
        }
        </S.Container>
        </>
    )
}