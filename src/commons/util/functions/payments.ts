import { loggedInUser } from "./firebaseFunctions";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../../pages/_app";

declare const window: typeof globalThis & {
    IMP: any;
  };

export const onClickPayment = async()=>{
    const email = await loggedInUser()
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675")
  // IMP.request_pay(param, callback) 결제창 호출
  IMP.request_pay({ // param
    pg: "nice",
    pay_method: "card",
    // merchant_uid: "ORD20180131-0000011",
    name: "프로그램 체험",
    amount: 100,
    buyer_email: email.email,
    buyer_name: "홍길동",
    buyer_tel: "010-4242-4242",
    buyer_addr: "서울특별시 강남구 신사동",
    buyer_postcode: "01181"
  }, (rsp:any) => { // callback
    if (rsp.success) {
        console.log("결제가 완료되었습니다. 마이페이지를 확인해주세요.")
        updateProfile(auth.currentUser, {
          displayName: "결제자"
        }).then(() => {
         console.log(auth.currentUser) 
        }).catch((error) => {
         console.log(error)
        });     
    } else {
     
      // 결제 실패 시 로직,
     
    }
  });
}