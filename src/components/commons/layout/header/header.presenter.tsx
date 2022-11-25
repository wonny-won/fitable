import * as S from './header.style'
export default function HeaderUI(){

    return(
        <>
            <S.HeaderWrapper>
                <div> Fit Your Life </div>
                <ul>
                    <li>다이어트 프로그램</li>
                    <li>건강관리 프로그램</li>
                    <li>맞춤 프로그램 진단</li>
                    <li>보조제 마켓</li>
                </ul>
               <div> 검색 </div>
               <div> 마이페이지 </div>
            </S.HeaderWrapper>
        </>
    )
}