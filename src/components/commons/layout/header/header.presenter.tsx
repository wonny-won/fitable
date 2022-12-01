import * as S from './header.style'
export default function HeaderUI(){
    const menuArr = ["프로그램 상담", "맞춤 프로그램 자가진단", "스토어"]
    return(
        <>
            <S.HeaderWrapper>
                <S.MenuWrapper>
                    {
                        menuArr.map((item,index)=>(<S.MenuLi key={index}>{item}</S.MenuLi>))
                    }
                </S.MenuWrapper>
                <S.MiniMenuWrap>
                    <S.Img src='/search.svg'/>
                    <S.Img src='/shoppingback.svg'/>
                </S.MiniMenuWrap>
            </S.HeaderWrapper>
        </>
    )
}