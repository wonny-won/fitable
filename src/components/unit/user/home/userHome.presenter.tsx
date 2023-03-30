import Head from "next/head"
import * as S from './userHome.style'
import MainCard from "../../../commons/atom/user/mainCard/mainCard.container"
import FitableLogo from "../../../commons/atom/user/logo/logo.presenter"

export default function UserMainUI(){
    const title = ['포트폴리오 피드백','이력서 피드백']
    return(
        <>
             <Head>
                <title> 맞춤형 온라인 헬스 | fitable</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
                <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
            </Head>
            <S.Container>
                <h1 style={{display:'none'}}>메인 홈화면</h1>
                <h2 style={{display: "none"}}> 프로그램 광고 </h2>
                <S.Section>
                    <S.AdText>서류에서 번번히 떨어지는 포트폴리오와 이력서?</S.AdText>
                    <S.Img src="/mascot.png"/>
                    <S.TextArea>
                        <S.ADText><S.ADSpan>fitable</S.ADSpan> 의 내게 fit 한 <S.AdSpan>포트폴리오 피드백</S.AdSpan> 을 받고나면?</S.ADText>
                        <S.ADText>나도 <S.ADSpan>이직 성공!</S.ADSpan></S.ADText>
                    </S.TextArea>
                </S.Section>
                <h2 style={{display: "none"}}> 프로그램 선택 </h2>
                <S.CardsWrapper>
                <FitableLogo fontSize={'45px'}/>
                    <S.CardsWrapDiv>
                    {
                        title.map((item,index:any)=>(
                            <MainCard title={item} key={index}/>
                        ))
                    }
                    </S.CardsWrapDiv>
                </S.CardsWrapper>
                <h2 style={{display: "none"}}> 프로그램 자가진단 </h2>
                <S.SelfTestWrapper>
                    <div>뭐가 필요한지 모르겠다면?</div>
                    <S.SelfTestBT>프로그램 자가진단</S.SelfTestBT>
                </S.SelfTestWrapper>
                <S.Hr />
            </S.Container>
        </>
    )
}