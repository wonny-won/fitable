import styled from "@emotion/styled";

export const HeaderWrapper = styled.nav`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color:#1c1c1c;
    align-items: center;
    padding: 0 8% 0 13%;
    position: fixed;
    top:0;
    z-index: 10000;
`
export const MenuWrapper = styled.ul`
    width: 450px;
    display: flex;
    margin : 0 auto;
    justify-content: space-between;
    color : white;
    font-weight: 320;
`
export const MenuLi = styled.li`
    list-style: none;
`
export const MiniMenuWrap = styled.div`
    width: 120px;
    display: flex;
    justify-content: space-around;
`
export const Img = styled.img`
    width : 19px;
    height: 21px;;
`