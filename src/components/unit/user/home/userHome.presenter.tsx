import Head from "next/head"
import * as S from './userHome.style'
import MainCard from "../../../commons/atom/user/mainCard/mainCard.container"

export default function UserMainUI(){
    return(
        <>
             <Head>
                <title> 맞춤형 온라인 헬스 | fitable</title>
                <meta charSet="UTF-8" />
                <meta name="맞춤형 다이어트, 건강관리" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
                <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
            </Head>
            <div>
                <div>당신의 몸을 위한 최선의 선택</div>
                <div>f<span/>i<span/>t<span/>a<span/>b<span/>l<span/>e</div>
                <div>건강관리도 프리미엄의 시대, 집에서 <span>내게 맞는 진짜 관리</span>를 받아보세요</div>
            </div>
            <h1 style={{display: "none"}}> 프로그램 선택 </h1>
            <S.CardsWrapper>
                <MainCard image='/dietprogram.svg'/>
                <MainCard image='/healingprogram.svg'/>
            </S.CardsWrapper>
        </>
    )
}