import ProgramDetailModalUI from "./modalDetail.presenter"
import { ModalDetailContainer } from "./modalDetail.types"

export default function ProgramDetailModal(props:ModalDetailContainer){
    return <ProgramDetailModalUI program={props.program}/>
}
