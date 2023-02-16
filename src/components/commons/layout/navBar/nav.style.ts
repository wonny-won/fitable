import styled from "@emotion/styled";
import  { MenuOutlined,UserOutlined,SearchOutlined }  from '@ant-design/icons'

interface IsActiveProps{
    isActive : boolean;
}
export const Wrapper = styled.div`
    display: flex;
    position: fixed;
    z-index: ${(props:IsActiveProps)=>(props.isActive ? "1005":"0")};
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 100vh;
    padding: 70px 0 70px 0;
    background-color: ${(props:IsActiveProps)=>(props.isActive ? "#FCF9EF":"#fff")};
    &:hover{
        background-color: #FCF9EF;
        cursor: pointer;
    }
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
    visibility : ${(props:IsActiveProps)=> props.isActive ? "visible" : "hidden"};
    width : 300px;
    background-color: #FCF9EF;
    transition: ${(props:IsActiveProps)=> props.isActive ? "0.7s" : "0.7s"};
    opacity: ${(props:IsActiveProps)=> props.isActive ? 1 : 0};
    font-size: 20px;
    color : #1c1c1c;
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
        font-weight: 400;
        cursor: pointer;
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