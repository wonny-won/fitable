import styled from "@emotion/styled";
import  { MenuOutlined,UserOutlined,SearchOutlined }  from '@ant-design/icons'



export const Container:JSX.Element = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 100vh;
    padding: 70px 0 70px 0;
    position: fixed;
    &:hover{
        background-color: red;
    }
`
export const HamburgerMenu =  styled(MenuOutlined)`
    font-size: 30px;
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
