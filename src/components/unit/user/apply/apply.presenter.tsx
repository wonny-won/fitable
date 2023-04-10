import * as S from './apply.style'
import { ApplyPresenterProps } from "./apply.types";

export default function ApplyUI(props:ApplyPresenterProps){
    return(
        <>
        <S.TitleWrap>
            <S.Title>APPLY&nbsp;&nbsp;&nbsp;PROGRAM</S.Title>
            <S.TitleImg src='/card.png'/>
        </S.TitleWrap>
        <S.Container>
            <S.ProgramCard>
                <S.ProgramTitle><S.ProgramTitleSpan>포트폴리오 피드백</S.ProgramTitleSpan></S.ProgramTitle>
                <S.ProgramSection>
                <S.GuideTitle> 프로그램을 선택해주세요.</S.GuideTitle>
                    <S.Text>
                        <S.ProgramText><input type="radio"/> 기능단위 피드백</S.ProgramText> 
                        <S.ProgramText>2만원</S.ProgramText>
                    </S.Text>
                    <S.Text>
                        <S.ProgramText><input type="radio"/> 페이지단위 피드백</S.ProgramText> 
                        <S.ProgramText>5만원</S.ProgramText>
                    </S.Text>
                    <S.Text>
                        <S.ProgramText><input type="radio"/> 전체간이 피드백</S.ProgramText> 
                        <S.ProgramText>7만원</S.ProgramText>
                    </S.Text>
                <S.GuideTitle>피드백 받으실 파일을 업로드해주세요.</S.GuideTitle>
                    <S.FileInput type='file'/>
                <S.GuideTitle>원하시는 피드백 방향성이 있으신가요?</S.GuideTitle>
                <S.TextArea rows={5} cols={10}/>
                </S.ProgramSection>
                <S.SubmitBt id="porfolioFeedback" onClick={props.onClickSubmit}>제출하기</S.SubmitBt>
                <S.Img src='/apply.png'/>
            </S.ProgramCard>
            <S.ProgramCard>
                <S.ProgramTitle><S.ProgramTitleSpan>이력서 피드백</S.ProgramTitleSpan></S.ProgramTitle>
                <S.ProgramSection>
                <S.GuideTitle> 프로그램을 선택해주세요.</S.GuideTitle>
                <S.Text>
                    <S.ProgramText><input type="radio"/> 이력서 작성 가이드</S.ProgramText> 
                    <S.ProgramText>2만원</S.ProgramText>
                </S.Text>
                <S.Text>
                    <S.ProgramText><input type="radio"/> 이력서 피드백</S.ProgramText> 
                    <S.ProgramText>5만원</S.ProgramText>
                </S.Text>
                <S.GuideTitle>피드백 받으실 파일을 업로드해주세요.</S.GuideTitle>
                    <S.FileInput type='file'/>
                    <S.Notification>* 이력서 작성 가이드를 선택하신분은 따로 업로드하지 않으셔도 됩니다.</S.Notification>
                <S.GuideTitle>원하시는 피드백 방향성이 있으신가요?</S.GuideTitle>
                    <S.TextArea rows={5} cols={10}/>
                </S.ProgramSection>
                <S.SubmitBt id="resumeFeedback" onClick={props.onClickSubmit}>제출하기</S.SubmitBt>
                <S.Img src='/apply.png'/>
            </S.ProgramCard>
        </S.Container>
        </>
    )
}