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
        <section>
            <h3 style={{display:"none"}}>프로필 사진</h3>
            <div>프로필 사진</div> 
            <div>이 름</div>
            <h3>전 화</h3>
            <h3>이메일 <span>{props.getUserInfo.data.email}</span></h3>
        </section>
        </S.Container>
    )
}