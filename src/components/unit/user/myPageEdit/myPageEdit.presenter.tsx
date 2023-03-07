import Head from "next/head";
import { MypageEditPresenter } from "./myPageEdit.types";
import * as S from './myPageEdit.style'

export default function MyPageEditUI(props:MypageEditPresenter){
    return(
        <>
            <Head>
                <meta name="description" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
                <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
                <title> 내정보 수정 | fitable</title>
            </Head>
            <S.Container>
                <S.Title> 회원정보 수정 </S.Title>
                <section>
                    <S.MiniWrapTop>
                        <S.H1> 프로필</S.H1>
                        <input id="photoURL" type="file" onChange={props.uploadImage('userProfile')}/>
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
                    <button onClick={props.onClickUpdateProfile}>수정하기</button>
                    <button >취소하기</button>
                </section>
            </S.Container>
        </>
    )
}