import * as S from './mainCard.styled'

export default function MainCardUI(props){
    console.log("안녕",props)
    return(
        <>
            <h1 style={{display: "none"}}> 다이어트 프로그램</h1>
                <S.CardWrap>
                    <S.ProgramCard src={props.image}/>
                </S.CardWrap>

        </>
    )
}