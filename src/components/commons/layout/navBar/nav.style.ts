import styled from "@emotion/styled";
import  { MenuOutlined,UserOutlined,SearchOutlined }  from '@ant-design/icons'

interface IsActiveProps{
    isActive : boolean;
}
export const Wrapper = styled.div`
    display: flex;
    position: fixed;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    left: 0px;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 100vh;
    padding: 70px 0 70px 0;
    background-color: ${(props:IsActiveProps)=>(props.isActive ? "transparent":"#FCF9EF")};
    &:hover{
        background-color: #FCF9EF;
        cursor: pointer;
    }
`
export const HamburgerMenuWrap = styled.div`
    width: 100%;
    text-align: center;
    padding: 5px;
`
export const HamburgerMenu =  styled(MenuOutlined)`
    font-size: 30px;
`
export const LogoWrap = styled.div`
    height: 55%;
`
export const LOGO = styled.img`
    width: 40px;
    height: 50px;
    margin-bottom: 100%;
`
export const IconWrap = styled.div`
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const MyPageIcon = styled(UserOutlined)`
    font-size: 30px;
`
export const SearchIcon = styled(SearchOutlined)`
    font-size: 30px;
`
export const MenuDetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    /* visibility : ${(props:IsActiveProps)=> props.isActive ? "visible" : "hidden"}; */
    width :300px;
    background-color: #FCF9EF;
    opacity: ${(props:IsActiveProps)=> props.isActive ? 0 : 1};
    transition: position,transform ease-in-out 1s;
    font-size: 20px;
    color : #1c1c1c;
    &{
        position: absolute;
        left: ${(props:IsActiveProps)=> props.isActive ?'-300px':'100px'};
        transform: ${(props:IsActiveProps)=> props.isActive ? 'translateX(-300px)':'translateX(0px)'};
    }
` 
export const MenuWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const MiniMenuWrap = styled.div`
    padding-left: 80px;
    font-size: 17px;
` 
export const Li = styled.li`
    list-style: none;
    margin-top: 13px;
    font-weight: 300;
    &:hover{
        transition : 0.5s;
        font-size: 22px;
        cursor: pointer;
        font-family: 'LOTTERIACHAB';
        color : #8D60F5;
    }
`
export const A  = styled.a`
    text-decoration: none;
    color: #1c1c1c;
`
export const MiniLi = styled.li`
    list-style: none;
    margin-top: 13px;
    font-weight: 300;
    &:hover{
        transition : 0.5s;
        font-size: 19px;
        font-weight: 400;
        cursor: pointer;
    }
`