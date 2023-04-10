import * as S from './footer.styled'

export default function FooterUI(){
    return(
        <>
          <h1 style={{display : "none"}}> fitable 회사 정보 </h1>
          <S.FooterWrapper>
            <h2 style={{display : "none"}}> 연계 사이트 </h2>
            <S.RelateSite>
                <S.H3 href="https://github.com/wonny-won"> github </S.H3>
                <S.H3> jaake0704@gmail.com </S.H3>
                <S.H3 href='https://dev-raccoon-man.tistory.com/'> tistory </S.H3>
            </S.RelateSite>
            <h2 style={{display : "none"}}>회사 대표</h2>
            <S.H3> 개발하는 너굴맨 </S.H3>
            <div> 본 사이트는 개발하는 너굴맨이 운영하는 회사로 따로 운영시간을 정해두지 않은 점 참고 부탁드립니다.</div>
          </S.FooterWrapper>
        </>
    )
}