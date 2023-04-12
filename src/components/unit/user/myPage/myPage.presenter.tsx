import Head from "next/head";
import { UserInfoData } from "./myPage.types";
import * as S from './myPage.style'
import UseModal from "../../../commons/atom/user/modal/modal.container";

export default function MyUI(props:UserInfoData){
    console.log(props)
    return(
        <S.Container>
        <Head>
            <title>마이페이지 | fitable</title>
            <meta charSet="UTF-8" />
            <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
            <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
        </Head>
        <S.MyPage> MY PAGE </S.MyPage>
        <h2 style={{display:"none"}}> 내 정보 </h2>
        <S.UserInfoSection>
            <S.UserInfoWrap>
                <h3 style={{display:"none"}}>프로필 사진</h3>
                <S.ProfilePhoto>
                  {
                    props.getUserInfo?.photoURL ? <S.Img src={props.getUserInfo.data?.photoURL}/>:<S.Img src='/noneimg.jpeg' />
                  }      
                </S.ProfilePhoto> 
                <S.UserData>
                    <S.MiniNameWrap>
                        <S.UserName>[ <S.UserNameSpan>{props.getUserInfo?.displayName}</S.UserNameSpan> ] 님</S.UserName>
                        <S.A href="/mypage/edit"><S.EditBT>EDIT</S.EditBT></S.A>
                    </S.MiniNameWrap>
                    <S.PHandEmailWrap>
                    <S.H3>전&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;화<S.Span>{props.getUserInfo?.phoneNumber}</S.Span></S.H3>
                    <S.H3>이 메 일 <S.Span>{props.getUserInfo?.email}</S.Span></S.H3>
                    {/* <S.H3>담 당 자 <S.Span>{props.userOtherData?.userData.programInfo.programManager}</S.Span></S.H3> */}
                    </S.PHandEmailWrap>
                </S.UserData>
            </S.UserInfoWrap>
            <S.UserPaymentInfoWrap>  
                <S.TotalPay> 총 주문금액 : {props.userOtherData ? props.userOtherData?.userData.payment : '10'} 원 </S.TotalPay>
                <S.H3> 적립금 : <S.SmallSpan>{props.userOtherData ? props.userOtherData?.userData.point : '10'}  </S.SmallSpan>원</S.H3>
                <S.Coupon> 쿠&nbsp;&nbsp;&nbsp;폰 : <S.SmallSpan>{props.userOtherData ? props.userOtherData?.userData.coupon : '10'} </S.SmallSpan>개</S.Coupon>
            </S.UserPaymentInfoWrap>
        </S.UserInfoSection>
        <S.Title>진행 프로그램</S.Title>
        <S.Line/>
        <S.ProgramSection>
            <S.Header> 
                <div>신청날짜</div>
                <div>프로그램</div>
                <div>신청내역</div>
            </S.Header>
            <S.Content>
                <div>{props.userOtherData?.userData?.programInfo?.applyAt}</div>
                <div>{props.userOtherData?.userData?.programInfo?.program}</div>
                <div onClick={props.onClickOpenModal}>보기</div>
                <UseModal isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen}/>
            </S.Content>
        </S.ProgramSection>
        </S.Container>
    )
}