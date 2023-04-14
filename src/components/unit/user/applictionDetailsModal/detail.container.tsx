import ApplicationDetailUI from "./detail.presenter"
import { useState } from "react"
import { updateDatas } from "../../../../commons/util/functions/firebase/update/updateDocs"
import useOnchangeInputs from '../../../../commons/util/hooks/onchangeInputs'
import { getUserInfoQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery"
import { getApplyDataQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getApplyDataQuery"
import { useUploadFile } from "../../../../commons/util/hooks/fileUpload"

export default function ApplicationDetail(){
    const [isEdit,setIsEdit] = useState(false)
    const {inputs,onChangeInputs} = useOnchangeInputs()
    const {uploadFile,file} = useUploadFile()
    // 리액트 쿼리로 가지고오는 데이터들 - 파일분리(commons/util)
    const getUserInfo = getUserInfoQuery()
    const applyData = getApplyDataQuery(getUserInfo.data?.result.localId)
    
    const onClickEdit = ()=>{
        setIsEdit(!isEdit)
    }
    const onClickUpdateAppltData = ()=>{
        const data = {...inputs, fileURL:file}
        updateDatas({docCollection:'applyData',docId:getUserInfo.data?.result.localId},data)
        setIsEdit(!isEdit)
    }
   return <ApplicationDetailUI data={applyData?.data}
                               isEdit={isEdit}
                               onClickEdit={onClickEdit}
                               onChangeInputs={onChangeInputs}
                               onClickUpdateAppltData={onClickUpdateAppltData}
                               uploadFile={uploadFile}/>
}