import { getDatas } from "../../../../../commons/util/functions/firebaseFunctions"
import { useEffect } from "react"
import Head from "next/head"

export default function ReviewListUI(){
    const dataArr = getDatas("programReview").then((res)=> res)
    return(
        <>
        <Head>
            <meta name="온라인PT,프리미엄 관리" content="코로나시대 관리도 집에서! 프리미엄 온라인 PT"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title> Program Review | fitable</title>
        </Head>
        <h1 style={{display:"none"}}>프로그램 리뷰</h1>
        {/* <h2>상위랭킹 리뷰</h2>
        <section>

        </section> */}
        <h2 style={{display:"none"}}>모든 리뷰</h2>
        <section>  
            <div>{}</div>
        </section>
        </>
    )
}