import * as S from './mainCard.styled'
import { MainCardProps } from './mainCard.types'

export default function MainCardUI(props:MainCardProps){
    return(
        <S.Container>
            <h1 style={{display: "none"}}>프로그램 카드</h1>
                <S.CardWrap>
                    <S.FrontProgramCard image={props.image} ref={front}>
                    <S.CardTitle>
                        {
                            props.image === '/dietprogram.svg' ? "Diet program" : "Healing program"
                        }
                    </S.CardTitle>
                    <S.ExpreienceBT>체험하기</S.ExpreienceBT>
                    </S.FrontProgramCard>
                    <S.BackProgramCard >
                        카드 뒷면
                    </S.BackProgramCard>
                </S.CardWrap>
        </S.Container>
    )
}