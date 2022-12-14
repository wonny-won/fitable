import { ModalDetailPresenter } from "./modalDetail.types"
import * as S from './modalDetail.style'

export default function ProgramDetailModalUI(props:ModalDetailPresenter){
    return(
        <>
        {
            props.program === "/dietprogram.svg" ? (
                <div>
                    <S.Title>Diet Program</S.Title>
                    <S.Line />
                    <S.Container>
                        <S.Text> <S.TextSpan>'fitable' </S.TextSpan>은 고객님께 <S.PromiseSpan>4가지를 약속</S.PromiseSpan>드립니다. </S.Text>
                        <S.PromiseContainer>
                            <div> <S.Span>첫째</S.Span>, 지정 담당자와의 <S.Span>1 : 1 관리</S.Span> </div>
                            <div> <S.Span>둘째</S.Span>, 주단위 <S.Span>체계적인 프로그램 관리</S.Span></div>
                            <div> <S.Span>셋째</S.Span>, 운동에 흥미를 잃지 않도록 주기적으로 <S.Span>다른 운동루틴 제공</S.Span> </div>
                            <div> <S.Span>넷째</S.Span>, 매일 <S.Span>운동 자세 체크</S.Span> 및 프로그램 효과기록을 위한 상담시간 </div>
                        </S.PromiseContainer>
                    </S.Container>
                </div>
            ) : (
                <div>힐링 프로그램</div>
            )
        }
        </>
    )
}