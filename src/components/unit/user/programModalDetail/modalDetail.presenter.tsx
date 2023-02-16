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
                        <S.Text> <S.TextSpan>'fitable' </S.TextSpan>은 고객님께 <S.PromiseSpan>5가지를 약속</S.PromiseSpan>드립니다. </S.Text>
                        <S.PromiseContainer>
                            <div> <S.Span>첫째</S.Span>, 지정 담당자와의 <S.Span>1 : 1 관리</S.Span> </div>
                            <div> <S.Span>둘째</S.Span>, 주단위의 <S.Span>체계적인 식단표 제공 및 관리</S.Span></div>
                            <div> <S.Span>셋째</S.Span>, 운동에 흥미를 잃지 않도록 주기적으로 <S.Span>다른 운동루틴 제공</S.Span> </div>
                            <div> <S.Span>넷째</S.Span>, 매일 <S.Span>운동 자세 체크</S.Span> </div>
                            <div> <S.Span>다섯째</S.Span>, 한주의 끝은 항상 <S.Span>프로그램의 효과 분석 및 개선 방향상담</S.Span> </div>
                        </S.PromiseContainer>
                        <S.Button>지금 신청하러 가기</S.Button>
                    </S.Container>
                </div>
            ) : (
                <div>
                    <S.Title>Healing Program</S.Title>
                    <S.Line /> 
                    <S.Container>
                        <S.Text> <S.TextSpan>'fitable' </S.TextSpan>은 고객님께 <S.PromiseSpan>5가지를 약속</S.PromiseSpan>드립니다. </S.Text>
                        <S.PromiseContainer>
                            <div> <S.Span>첫째</S.Span>, 지정 담당자와의 <S.Span>1 : 1 관리</S.Span> </div>
                            <div> <S.Span>둘째</S.Span>, 주단위 <S.Span>회원님의 몸상태 분석</S.Span>상담 실시</div>
                            <div> <S.Span>셋째</S.Span>, 매주 몸상태에 맞는 <S.Span>다른 운동루틴 제공</S.Span> </div>
                            <div> <S.Span>넷째</S.Span>, 매일 <S.Span>운동 자세 체크</S.Span> 및 프로그램 효과기록을 위한 상담시간 </div>
                            <div> <S.Span>다섯째</S.Span>, 한주의 끝은 항상 <S.Span>프로그램의 효과 분석 및 개선 방향상담</S.Span> </div>
                        </S.PromiseContainer>
                        <S.Button>지금 신청하러 가기</S.Button>
                    </S.Container>
                </div>
            )
        }
        </>
    )
}