import Head from "next/head";
import { UserInfoData } from "./myPage.types";

export default function MyUI(props:UserInfoData){
    return(
        <>
        <Head>
            <title>마이페이지 | fitable</title>
            <meta charSet="UTF-8" />
            <meta name="description" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
            <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
        </Head>
        <h1> MY PAGE </h1>
        <h2> 내 정보 </h2>
        <section>
            
        </section>
        </>
    )
}