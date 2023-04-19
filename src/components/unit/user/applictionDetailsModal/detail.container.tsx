import ApplicationDetailUI from "./detail.presenter"
import { useState } from "react"
import { updateUserApplyDatas } from "../../../../commons/util/functions/firebase/update/updateUserApplyData"
import useOnchangeInputs from '../../../../commons/util/hooks/onchangeInputs'
import { getUserInfoQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery"
import { getApplyDataQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getApplyDataQuery"
import { useUploadFile } from "../../../../commons/util/hooks/fileUpload"
import { ApplicationDetailConainerProps } from "./detai.types"

export default function ApplicationDetail(props:ApplicationDetailConainerProps){
    const [isEdit,setIsEdit] = useState(false)
    const {inputs,onChangeInputs} = useOnchangeInputs()
    const {uploadFile,file} = useUploadFile()
    // 리액트 쿼리로 가지고오는 데이터들 - 파일분리(commons/util)
    const getUserInfo = getUserInfoQuery()
    const applyData = getApplyDataQuery({docCollection:'applyData',userUID:getUserInfo.data?.result.localId,middleCollection:'applyProgram',docId:props.applyId})

    const onClickEdit = ()=>{
        setIsEdit(!isEdit)
    }
    const onClickUpdateAppltData = async()=>{
        const data = {...inputs}
        if(file!=='') data.fileURL = file
        const result = await updateUserApplyDatas({docCollection:'user',userUID:getUserInfo.data?.result.localId,middleCollection:'applyProgram',docId:props.applyId},data)
        console.log(result)
        setIsEdit(!isEdit)
    }
   return <ApplicationDetailUI data={applyData.data}
                               isEdit={isEdit}
                               onClickEdit={onClickEdit}
                               onChangeInputs={onChangeInputs}
                               onClickUpdateAppltData={onClickUpdateAppltData}
                               uploadFile={uploadFile}/>
}