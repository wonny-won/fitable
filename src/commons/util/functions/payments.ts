import { loggedInUser } from "./firebase/read/getLogginUser";
import { addCustomIdDoc } from "./firebase/create/addCustomIdDocs";
import { updateUserApplyDatas } from "./firebase/update/updateUserApplyData";

declare const window: typeof globalThis & {
    IMP: any;
  };

export const onClickPayment = (data: {program?: string}) => async()=>{
    const { result,getUserDatas }:any = await loggedInUser()
    const IMP = window.IMP; 
    IMP.init("imp49910675")
    const paymentresult = await new Promise((resolve, reject)=>{
      IMP.request_pay({
      pg: "nice",
      pay_method: "card",
      name: data.program,
      amount: 100,
      buyer_email: result?.email,
      buyer_name: result.displayName ? result.displayName : `${result?.email} 님`,
      buyer_tel: result.phoneNumber ? result.phoneNumber:"번호없음",
      buyer_addr: "",
      buyer_postcode: "01181"
    }, async (rsp:any) => {
      if (rsp.success) {
          const applyData = {...data, amount:rsp.paid_amount}
          await addCustomIdDoc('applyData',result.localId,'applyProgram',applyData)
          const payment = getUserDatas[0]?.payment+rsp.paid_amount
          const point = getUserDatas[0]?.point + rsp.paid_amount*0.05
          await updateUserApplyDatas({docCollection:'user',userUID:result.localId,middleCollection:'userData',docId:getUserDatas[0]?.id},{payment,point})
          // if(data.program) sessionStorage.setItem("product", data.program);
          alert("결제가 완료되었습니다. 마이페이지를 확인해주세요.")
          resolve( "결제완료")
      } else {
        alert("결제에 실패했습니다.다시 시도해주세요!")
        reject( "결제실패")
      }
    });
  })
  return paymentresult
}