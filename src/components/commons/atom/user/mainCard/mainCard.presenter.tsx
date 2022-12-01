import * as S from './mainCard.styled'
import { MainCardProps } from './mainCard.types'

export default function MainCardUI(props:MainCardProps){
    return(
        <>
            <h1 style={{display: "none"}}> 다이어트 프로그램</h1>
                <S.CardWrap>
                    <S.ProgramCard image={props.image}>
                    <S.CardTitle>
                        {
                            props.image === '/dietprogram.svg' ? "Diet program" : "Healing program"
                        }
                    </S.CardTitle>
                    <S.Line />
                    </S.ProgramCard>
                </S.CardWrap>
        </>
    )
}