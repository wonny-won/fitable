import ApplyUI from "./apply.presenter"
import Head from "next/head"
import useOnchangeInputs from "../../../../commons/util/hooks/onchangeInputs"
import { ChangeEvent, useState } from "react"
import { onClickApplySubmit } from "./applyFn/onClickSubmit"
import { useUploadFiles } from "../../../../commons/util/hooks/filesUpload"

export default function Apply(){
    const {onChangeInputs,inputs} = useOnchangeInputs()
    const [program,setProgram] = useState('')
    const { onChangeFile,file } = useUploadFiles()
    const onChangeProgram = (e:ChangeEvent<HTMLInputElement>)=>{
        setProgram(e.target.id)
    }

    return(
        <>
        <Head>
            <title> 프로그램 신청 | fitable </title>
            <meta charSet="UTF-8" />
            <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
            <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
            {/* 결제 script */}
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
            <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script> 
        </Head>
        <ApplyUI onClickSubmit={onClickApplySubmit(inputs,program,file)}
                 onChangeInputs={onChangeInputs}
                 onChangeProgram={onChangeProgram}
                 onChangeFile={onChangeFile}/>
        </>
    )
}