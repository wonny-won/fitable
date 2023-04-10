import { loggedInUser } from "./firebase/getUserInfo";

declare const window: typeof globalThis & {
    IMP: any;
  };

export const onClickPayment = (program: string) => async()=>{
    const { result } = await loggedInUser()
    console.log(result)
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675")
  // IMP.request_pay(param, callback) 결제창 호출
  IMP.request_pay({ // param
    pg: "nice",
    pay_method: "card",
    // merchant_uid: "ORD20180131-0000011",
    name: program,
    amount: 100,
    buyer_email: result?.email,
    buyer_name: result.displayName ? result.displayName : `${result?.email} 님`,
    buyer_tel: result.phoneNumber ? result.phoneNumber:"번호없음",
    buyer_addr: "",
    buyer_postcode: "01181"
  }, (rsp:any) => { // callback
    if (rsp.success) {
        alert("결제가 완료되었습니다. 마이페이지를 확인해주세요.")
    } else {
      alert("결제에 실패했습니다.다시 시도해주세요!")
    }
  });
}