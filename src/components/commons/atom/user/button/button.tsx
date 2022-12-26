import { ButtonProps } from "./button.type";
import * as S from './button.styled'

export default function Button(props:ButtonProps){
    return(
        <>
            <S.Button color={props.color}>{props.contents}</S.Button>
        </>
    )
}