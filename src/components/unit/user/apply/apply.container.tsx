import ApplyUI from "./apply.presenter"
import useOnchangeInputs from "../../../../commons/util/hooks/onchangeInputs"
import { onClickApplySubmit } from "./applyFn/onClickSubmit"
import { useUploadFiles } from "../../../../commons/util/hooks/filesUpload"
import { useGetProgram } from "./applyFn/useGetProgramName"

export default function Apply(){
    const {onChangeInputs,inputs} = useOnchangeInputs()
    const {program,onChangeProgram} = useGetProgram()
    const { onChangeFile,files } = useUploadFiles()
    return <ApplyUI onClickSubmit={onClickApplySubmit(inputs,program,files)}
                    onChangeInputs={onChangeInputs}
                    onChangeProgram={onChangeProgram}
                    onChangeFile={onChangeFile} />
}