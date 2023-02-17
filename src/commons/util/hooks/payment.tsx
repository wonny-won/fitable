import Head from "next/head";
declare const window: typeof globalThis & {
    IMP: any;
  };

export default function usePayment (){
    ()=>{
        const IMP = window.IMP; // 생략 가능
        console.log(window)
        IMP.init("imp49910675")
        // IMP.request_pay(param, callback) 결제창 호출
      IMP.request_pay({ // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "프로그램 체험",
        amount: 1000,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181"
      }, (rsp:any) => { // callback
        if (rsp.success) {
        
          // 결제 성공 시 로직,
         
        } else {
         
          // 결제 실패 시 로직,
         
        }
      });
    }
    return(
        <>
        <Head>
            {/* {/* 결제 - jQuery */}
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
            {/* 결제 - iamport.payment.js */}
            <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script> 
        </Head>
        </>
    )
}