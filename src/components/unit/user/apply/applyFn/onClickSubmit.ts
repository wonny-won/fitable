import { onClickPayment } from "../../../../../commons/util/functions/payments"
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing"
import { UploadFiles } from "../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"

export const onClickApplySubmit = (inputs:any,program:any,file:File)=> {
    const routerhooks = useRoutingPageHooks()
    return async () => {
            alert('결제 후 프로그램을 신청하시하시겠습니까?')
            const uploadfile = await UploadFiles('/applyFile',file)
            const fileURL = uploadfile?.fullPath
            const data = {...inputs,program,fileURL}
            try{
                const paymentResult = await onClickPayment(data)()
                console.log(paymentResult)
                if(paymentResult==="결제완료")routerhooks('/mypage')()    
            }catch(error){
                alert(error)
            }
    }
}
