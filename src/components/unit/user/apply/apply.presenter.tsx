import Head from "next/head";
import * as S from './apply.style'
import { ApplyPresenterProps } from "./apply.types";

export default function ApplyUI(props:ApplyPresenterProps){
    return(
        <>
        <S.Title>프로그램 신청</S.Title>
        <S.Container>
            <div>
                <h2>포트폴리오 피드백</h2>
                <S.ProgramSection>
                    <h3> 프로그램을 선택해주세요.</h3>
                    <div><input type="radio"/> 기능단위 피드백</div>
                    <div><input type="radio"/> 페이지단위 피드백</div>
                    <div><input type="radio"/> 전체간이 피드백</div>
                <h3>피드백 받으실 파일을 업로드해주세요.</h3>
                    <input type='file'/>
                <h3>원하시는 피드백 방향성이 있으신가요?</h3>
                <textarea rows={10} cols={10}/>
                </S.ProgramSection>
                <button id="porfolioFeedback" onClick={props.onClickSubmit}>제출하기</button>
            </div>
            <div>
                <h2>이력서 피드백</h2>
                <S.ProgramSection>
                    <h3> 프로그램을 선택해주세요.</h3>
                    <div><input type="radio"/> 이력서 작성 가이드 </div>
                    <div><input type="radio"/> 이력서 피드백 </div>
                    <h3>피드백 받으실 파일을 업로드해주세요.</h3>
                    <input type='file'/>
                <h3>원하시는 피드백 방향성이 있으신가요?</h3>
                <textarea rows={10} cols={10}/>
                </S.ProgramSection>
                <button id="resumeFeedback" onClick={props.onClickSubmit}>제출하기</button>
            </div>
        </S.Container>
        </>
    )
}