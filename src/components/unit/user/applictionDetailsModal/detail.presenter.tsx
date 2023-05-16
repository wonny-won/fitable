import Head from "next/head"
import { ApplicationDetailProps } from "./detai.types"
import * as S from './detail.style'

export default function ApplicationDetailUI(props:ApplicationDetailProps){
    return(
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
            <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
        </Head>
        <S.TitleWrap>
        <S.Title>신청내역</S.Title>
        <S.EditBt onClick={props.onClickEdit}>edit</S.EditBt>
        </S.TitleWrap>
        <S.Line/>
        <S.Section>
        <S.MiniSection>
            <S.MiniTitle>신청 프로그램</S.MiniTitle>
            <S.ProgramWrap>
            <S.Text>{props.data?.program}</S.Text>
            <S.Text>{props.data?.applyAt}</S.Text>
            </S.ProgramWrap>
        </S.MiniSection>
        <S.MiniSection>
            <S.MiniTitle>원하는 피드백 방향성</S.MiniTitle>
            <S.Textarea id='userWantFeedbackGuide' readOnly={!props.isEdit} placeholder={props.data?.userWantFeedbackGuide} onChange={props.onChangeInputs}/>
        </S.MiniSection>
        <S.MiniSection>
            <S.MiniTitle>첨부파일</S.MiniTitle>
            <S.Text>{props.data?.fileURL}</S.Text>
            <S.FileInput type="file" onChange={props.onChangeFile} isEdit={props.isEdit}/>
        </S.MiniSection>
        </S.Section>
        <S.SubmitBt isEdit={props.isEdit} onClick={props.onClickEditReview({inputs:props.inputs,file:props.file})}>수정하기</S.SubmitBt>
        </>
    )
}