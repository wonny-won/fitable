import { onClickPayment } from "../../../../commons/util/functions/payments"
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"

export const onClickApplySubmit = (inputs:any,program:any,file:any)=> {
    const routerhooks = useRoutingPageHooks()
    return async() => {
            alert('결제 후 프로그램을 신청하시하시겠습니까?')
            const data = {...inputs,program,fileURL:file}
            const paymentResult = await onClickPayment(data)()
            console.log(paymentResult)
            if(paymentResult==="결제완료")routerhooks('/mypage')()
    }
}
