import Head from "next/head";
import { UserInfoData } from "./myPage.types";
import * as S from './myPage.style'
import UseModal from "../../../commons/atom/user/modal/modal.container";

export default function MyUI(props:UserInfoData){
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
                  {  props.getUserInfo?.photoUrl ? <S.Img src={props.getUserInfo?.photoUrl}/>:<S.Img src='/noneimg.jpeg' />  }      
                </S.ProfilePhoto> 
                <S.UserData>
                    <S.MiniNameWrap>
                        <S.UserName>[ <S.UserNameSpan>{props.getUserInfo?.displayName}</S.UserNameSpan> ] 님</S.UserName>
                        <S.A href="/mypage/edit"><S.EditBT>EDIT</S.EditBT></S.A>
                    </S.MiniNameWrap>
                    <S.PHandEmailWrap>
                    <S.H3>전&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;화<S.Span>{props.getUserInfo?.phoneNumber}</S.Span></S.H3>
                    <S.H3>이 메 일 <S.Span>{props.getUserInfo?.email}</S.Span></S.H3>
                    </S.PHandEmailWrap>
                </S.UserData>
            </S.UserInfoWrap>
            <S.UserPaymentInfoWrap>  
                <S.TotalPay> 총 주문금액 : 100 원 </S.TotalPay>
                <S.H3> 적립금 : <S.SmallSpan>{props.userOtherData?.point}  </S.SmallSpan>원</S.H3>
                <S.Coupon> 쿠&nbsp;&nbsp;&nbsp;폰 : <S.SmallSpan>{props.userOtherData?.coupon}</S.SmallSpan>개</S.Coupon>
            </S.UserPaymentInfoWrap>
        </S.UserInfoSection>
        <S.Title>신청 프로그램</S.Title>
        <S.Line/>
        <S.ProgramSection>
            <S.Header> 
                <div>신청날짜</div>
                <div>프로그램</div>
                <div>신청내역 / 리뷰작성</div>
            </S.Header>
            {
                props.getAllApplyData?.length > 0 ? props.getAllApplyData.map((item)=>(
                    <div key={item.id}>
                    <S.Content>
                    <div>{item.applyAt}</div>
                    <S.ItemWrap>{item.program}</S.ItemWrap>
                    <S.BtWrap>
                        <S.ViewBt id={item.id} onClick={props.onClickOpenModal}>보기</S.ViewBt>
                        <S.ReiewBt src='/reviewPencil.svg' id={item.program} onClick={props.propsWithRouter}/>
                    </S.BtWrap>
                    </S.Content>
                    </div>
                )) : (
                    <S.Content>
                    <div> - </div>
                    <div> 신청 내역이 없습니다. </div>
                    <S.ViewBt>보기</S.ViewBt>
                    <S.ViewBt>-</S.ViewBt>
                    </S.Content>
                )
            }
            <UseModal isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} applyId={props.applyId}/>
        </S.ProgramSection>
        </S.Container>
    )
}