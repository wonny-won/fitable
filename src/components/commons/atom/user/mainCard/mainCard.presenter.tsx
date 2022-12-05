import * as S from './mainCard.styled'
import { MainCardProps } from './mainCard.types'

export default function MainCardUI(props:MainCardProps){
    return(
        <>
            <h1 style={{display: "none"}}>프로그램 카드</h1>
                <S.CardWrap>
                    <S.FrontProgramCard image={props.image} className="front">
                    <S.CardTitle>
                        {
                            props.image === '/dietprogram.svg' ? "Diet program" : "Healing program"
                        }
                    </S.CardTitle>
                    <S.Line />
                    </S.FrontProgramCard>
                    <S.BackProgramCard className="back">
                        <button>뒷면!</button>
                    </S.BackProgramCard>
                </S.CardWrap>
        </>
    )
}