import Head from "next/head"
import * as S from './userHome.style'
import MainCard from "../../../commons/atom/user/mainCard/mainCard.container"
import Banner from "../../../commons/layout/banner/banner.presenter"

export default function UserMainUI(){
    const ImgArr = ['/dietprogram.svg','/healingprogram.svg']
    return(
        <>
             <Head>
                <title> 맞춤형 온라인 헬스 | fitable</title>
                <meta charSet="UTF-8" />
                <meta name="맞춤형 다이어트, 건강관리" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
                <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
            </Head>
            <h1 style={{display: "none"}}> 프로그램 선택 </h1>
            <S.CardsWrapper>
                {
                    ImgArr.map((item,index)=>(
                        <MainCard image={ImgArr[index]} key={index}/>
                    ))
                }
            </S.CardsWrapper>
            <h1 style={{display: "none"}}> 프로그램 자가진단 </h1>
            <S.SelfTestWrapper>
                <div>뭐가 필요한지 모르겠다면?</div>
                <S.SelfTestBT>프로그램 자가진단</S.SelfTestBT>
            </S.SelfTestWrapper>
            <S.Hr />
        </>
    )
}