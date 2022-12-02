import * as S from './header.style'

export default function HeaderUI(){
    const menuArr = ["프로그램 상담", "맞춤 프로그램 자가진단", "스토어"]
    return(
        <>
            <h1 style={{display : "none"}}> header menu bar </h1>
            <S.HeaderWrapper>
                <h2 style={{display : "none"}}>main menu</h2>
                <S.MenuWrapper>
                    {
                        menuArr.map((item,index)=>(<S.MenuLi key={index}>{item}</S.MenuLi>))
                    }
                </S.MenuWrapper>
                <S.MiniMenuWrap>
                    <h2 style={{display : "none"}}> 검색 </h2>
                    <S.Img src='/search.svg'/>
                    <h2 style={{display : "none"}}> 장바구니 </h2>
                    <S.Img src='/shoppingback.svg'/>
                </S.MiniMenuWrap>
            </S.HeaderWrapper>
        </>
    )
}