import ApplicationDetailUI from "./detail.presenter"
import useOnchangeInputs from '../../../../commons/util/hooks/onchangeInputs'
import { getUserInfoQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery"
import { getApplyDataQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getApplyDataQuery"
import { ApplicationDetailConainerProps } from "./detai.types"
import { useUploadFiles } from "../../../../commons/util/hooks/filesUpload"
import { useIsEdit } from "./detailFn/isEdit"

export default function ApplicationDetail(props:ApplicationDetailConainerProps){
    const {isEdit,onClickEdit} = useIsEdit()
    const {inputs,onChangeInputs} = useOnchangeInputs()
    const {onChangeFile,files} = useUploadFiles()
    const getUserInfo = getUserInfoQuery()
    const applyData = getApplyDataQuery({docCollection:'applyData',userUID:getUserInfo.data?.result?.localId,middleCollection:'applyProgram',docId:props.applyId})
    return <ApplicationDetailUI data={applyData.data}
                                isEdit={isEdit}
                                onClickEdit={onClickEdit}
                                onChangeInputs={onChangeInputs}
                                onChangeFile={onChangeFile}
                                file={files}
                                inputs={inputs}
                                userUID={getUserInfo.data?.result?.localId}
                                applyId={props.applyId}/>
}