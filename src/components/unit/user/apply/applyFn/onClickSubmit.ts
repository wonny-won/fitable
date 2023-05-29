import { onClickPayment } from "../../../../../commons/util/functions/payments"
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing"
import { UploadFiles } from "../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"

export const onClickApplySubmit = (inputs:any,program:any,file:File[],user:any)=> {
    const routerhooks = useRoutingPageHooks()
    return async () => {
            alert('결제 후 프로그램을 신청하시하시겠습니까?')
            const data = {...inputs,program}
            if(file.length>0){
                const fileURL:any[] = []
                fileURL.push(file[file.length-1])
                const uploadfile = await UploadFiles('/applyFile',fileURL)
                const allFileURL = uploadfile?.map((item)=>item.fullPath)
                data.fileURL = allFileURL
            }
            try{
                if(user==='로그인 하지 않은 유저입니다.'){ 
                    alert(`로그인이 필요한 서비스 입니다.`)
                    return
                }
                const paymentResult = await onClickPayment(data)()
                if(paymentResult==="결제완료")routerhooks('/mypage')()    
            }catch(error){
                console.log(error)
            }
    }
}