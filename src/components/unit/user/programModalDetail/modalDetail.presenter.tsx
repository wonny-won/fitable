import { ModalDetailPresenter } from "./modalDetail.types"

export default function ProgramDetailModalUI(props:ModalDetailPresenter){
    console.log(props.program)
    return(
        <>
        {
            props.program === "/dietprogram.svg" ? (
                <div>다이어트 프로그램</div>
            ) : (
                <div>힐링 프로그램</div>
            )
        }
        </>
    )
}