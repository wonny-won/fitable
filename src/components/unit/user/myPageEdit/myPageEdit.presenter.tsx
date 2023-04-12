import Head from "next/head";
import { MypageEditPresenter } from "./myPageEdit.types";
import * as S from './myPageEdit.style'
import {Img} from '../myPage/myPage.style'

export default function MyPageEditUI(props:MypageEditPresenter){
    return(
        <>
            <Head>
            <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
                <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
                <title> 내정보 수정 | fitable</title>
            </Head>
                <S.Title> 회원정보 수정 </S.Title>
                <S.Container>
                    <S.MiniWrapTop>
                        <S.ProfileImg> 프로필</S.ProfileImg>
                        <S.ResultImg>
                            { !props.image ? <Img src="/noneimg.jpeg"/> : <Img src={`https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/${props.image}?alt=media`}/>}
                        </S.ResultImg>
                        <S.ImgWrap>
                            <S.ImgInput htmlFor="photoURL"> upload </S.ImgInput>
                            <input id="photoURL" type="file" onChange={props.uploadImage('userProfile')} hidden={true}/>
                            <S.UserProfileImg>{props.image}</S.UserProfileImg>
                        </S.ImgWrap>
                    </S.MiniWrapTop>
                    <S.MiniWrap>
                        <S.H1><S.Span>*</S.Span> 이름</S.H1>
                        <S.Input id="displayName" type="text" onChange={props.onChangeInput} defaultValue={props.getUserInfo?.displayName}/>
                    </S.MiniWrap>
                    <S.MiniWrap>
                        <S.H1><S.Span>*</S.Span> 이메일</S.H1>
                        <S.Input id="email" type="text" onChange={props.onChangeInput} defaultValue={props.getUserInfo?.email}/>
                    </S.MiniWrap>
                    <S.MiniWrap>
                        <S.H1><S.Span>*</S.Span> 전화번호</S.H1>
                        <S.Input id="phoneNumber" type="text" onChange={props.onChangeInput} defaultValue={props.getUserInfo?.phoneNumber}/>
                    </S.MiniWrap>
                    <S.BtWrap>
                        <S.SubmitBt onClick={props.onClickUpdateProfile}>수정하기</S.SubmitBt>
                        <S.CancelBt onClick={props.routerhook('/mypage')}>취소하기</S.CancelBt>
                    </S.BtWrap>
                </S.Container>
        </>
    )
}