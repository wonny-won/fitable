import Head from "next/head"

export default function UserMain(){
    return(
        <>
             <Head>
                <title> 맞춤형 온라인 헬스 | finda</title>
                <meta charSet="UTF-8" />
                <meta name="맞춤형 다이어트, 건강관리" content="자기관리도 프리미엄의 시대! 내게 핏한 관리를 받아보세요." />
                <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
            </Head>
            <h1 style={{display: "none"}}> 메인 페이지 </h1>
            <section>
                <div>유저 메인페이지</div>
            </section>
        </>
    )
}