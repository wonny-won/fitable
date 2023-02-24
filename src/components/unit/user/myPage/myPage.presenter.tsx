import Head from "next/head";
import { UserInfoData } from "./myPage.types";
import * as S from './myPage.style'

export default function MyUI(props:UserInfoData){
    return(
        <S.Container>
        <Head>
            <title>마이페이지 | fitable</title>
            <meta charSet="UTF-8" />
            <meta name="description" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
            <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
        </Head>
        <h1> MY PAGE </h1>
        <h2 style={{display:"none"}}> 내 정보 </h2>
        <S.UserInfoSection>
            <S.UserInfoWrap>
                <h3 style={{display:"none"}}>프로필 사진</h3>
                <S.ProfilePhoto>
                  {
                    props.getUserInfo?.profileImg ? <S.Img src={props.getUserInfo.data?.profileImg}/>:<S.Img src='/noneimg.jpeg' />
                  }      
                </S.ProfilePhoto> 
                <S.UserData>
                    <S.MiniNameWrap>
                        <S.H3>이 름</S.H3>
                        <S.EditBT>EDIT</S.EditBT>
                    </S.MiniNameWrap>
                    <div>
                    <S.H3>전 화</S.H3>
                    <S.H3>이메일 <S.Span>{props.getUserInfo?.email}</S.Span></S.H3>
                    </div>
                </S.UserData>
            </S.UserInfoWrap>
            <S.UserPaymentInfoWrap>  
                <S.H3> 총 주문금액: {props.getUserInfo?.totalPayment ? props.getUserInfo?.totalPayment : '0'} 원 </S.H3>
                <S.H3> 적립금: {props.getUserInfo?.point ? props.getUserInfo?.point : '0'} 원 </S.H3>
            </S.UserPaymentInfoWrap>
        </S.UserInfoSection>
        </S.Container>
    )
}