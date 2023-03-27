import * as S from './banner.style'
import FitableLogo from '../../atom/user/logo/logo.presenter'

export default function Banner (){
    return(
        <>
            <h1 style={{display:"none"}}>fitable 소개</h1>
            <S.TextWrap>
                <S.MainText>커피한잔의 여유 <S.TextSpan>최선의 선택</S.TextSpan></S.MainText>
                <FitableLogo fontSize={"35px"}/>
                <div>나의 수월한 이직을 위한 <S.TextSpan>포트폴리오 피드백</S.TextSpan>을 받아보세요</div>
            </S.TextWrap>

        </>
    )
}