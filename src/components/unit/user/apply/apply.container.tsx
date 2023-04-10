import ApplyUI from "./apply.presenter"
import { onClickPayment } from "../../../../commons/util/functions/payments"
import Head from "next/head"

export default function Apply(){
    const onClickSubmit = (e:any)=>{
        console.log('실행!')
        onClickPayment(e.target.id)()
    }
    return(
        <>
        <Head>
            <title> 프로그램 신청 | fitable </title>
            <meta charSet="UTF-8" />
            <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
            <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
            {/* {/* 결제 - jQuery */}
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
            {/* 결제 - iamport.payment.js */}
            <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script> 
        </Head>
        <ApplyUI onClickSubmit={onClickSubmit}/>
        </>
    )
}