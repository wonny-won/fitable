import { loggedInUser } from "./firebaseFunctions";

declare const window: typeof globalThis & {
    IMP: any;
  };

export const onClickPayment = (program: string) => async()=>{
    const user = await loggedInUser()
    console.log(user)
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675")
  // IMP.request_pay(param, callback) 결제창 호출
  IMP.request_pay({ // param
    pg: "nice",
    pay_method: "card",
    // merchant_uid: "ORD20180131-0000011",
    name: program,
    amount: 100,
    buyer_email: user?.email,
    buyer_name: user.displayName ? user.displayName : `${user?.email} 님`,
    buyer_tel: user.phoneNumber ? user.phoneNumber:"번호없음",
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