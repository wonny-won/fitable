import Head from "next/head"
import * as S from './userHome.style'
import MainCard from "../../../commons/atom/user/mainCard/mainCard.container"
import FitableLogo from "../../../commons/atom/user/logo/logo.presenter"
import Carousel from "../../../commons/atom/user/carousel/carousel.container"
import { HomeProps } from "./home.types"

export default function UserMainUI(props:HomeProps){
    const title = ['포트폴리오 피드백','이력서 피드백']
    return(
        <>
             <Head>
                <title> 이직이 쉬워진다! | fitable</title>
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
                        <S.ADText>나도 <S.AdSpan>이직 성공!</S.AdSpan></S.ADText>
                    </S.TextArea>
                </S.Section>
                <h2 style={{display: "none"}}> 프로그램 선택 </h2>
                <S.CardsWrapper>
                <S.ProgramText scroll={props.scrollIsActive}><S.ProgramTextLogoSpan>fitable</S.ProgramTextLogoSpan> &nbsp;&nbsp;의 엄청난 프로그램</S.ProgramText>
                    <S.CardsWrapDiv>
                    {
                        title.map((item,index:any)=>(
                            <MainCard title={item} key={index}/>
                        ))
                    }
                    </S.CardsWrapDiv>
                </S.CardsWrapper>
                <h2 style={{display: "none"}}> 피드백 튜터 소개 </h2>
                <S.TutorContainer>
                    <S.TutorText><S.TutorTextSpan>fitable</S.TutorTextSpan>과 함께하는 <S.TutorTextSpan>튜터</S.TutorTextSpan></S.TutorText>
                    <Carousel/>
                </S.TutorContainer>
            </S.Container>
        </>
    )
}