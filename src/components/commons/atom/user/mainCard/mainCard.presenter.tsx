import * as S from './mainCard.styled'

export default function MainCardUI(props){
    console.log("안녕",props)
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
                    <S.ExplainBT>설명</S.ExplainBT>
                    </S.ProgramCard>
                </S.CardWrap>
        </>
    )
}