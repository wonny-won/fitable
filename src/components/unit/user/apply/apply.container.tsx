import ApplyUI from "./apply.presenter"
import useOnchangeInputs from "../../../../commons/util/hooks/onchangeInputs"
import { onClickApplySubmit } from "./applyFn/onClickSubmit"
import { useUploadFiles } from "../../../../commons/util/hooks/filesUpload"
import { useGetProgram } from "./applyFn/useGetProgramName"
import { getUserInfoQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery"

export default function Apply(){
    const {onChangeInputs,inputs} = useOnchangeInputs()
    const {program,onChangeProgram} = useGetProgram()
    const { onChangeFile,files } = useUploadFiles()
    const {data} = getUserInfoQuery()
    return <ApplyUI onClickSubmit={onClickApplySubmit(inputs,program,files,data?.result)}
                    onChangeInputs={onChangeInputs}
                    onChangeProgram={onChangeProgram}
                    onChangeFile={onChangeFile} />
}