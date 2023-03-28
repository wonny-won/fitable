import * as S from './banner.style'
import FitableLogo from '../../atom/user/logo/logo.presenter'

export default function Banner (){
    return(
        <>
            <h1 style={{display:"none"}}>fitable 소개</h1>
            <S.TextWrap>
                <S.MainText><S.TextSpan>나만 이직이 잘 안될땐?</S.TextSpan></S.MainText>
                <FitableLogo fontSize={"45px"}/>
                <div><S.TextSpan>수월한 이직</S.TextSpan>을 위한 가장 빠르고 확실한 방법 <S.TextSpan>fitable</S.TextSpan></div>
            </S.TextWrap>

        </>
    )
}