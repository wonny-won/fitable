import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const MyPage = styled.h1`
    font-size: 26px;
    font-weight: 900;
    margin: 0;
`
export const Title = styled.h2`
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    padding-left: 10%;
`
export const Line = styled.hr`
    width: 80%;
    background-color: #1c1c1c;
    height: 1px;
    border: none;
`
export const UserInfoSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 0px 60px;
    border: 2px solid #e9e9e9;
    margin: 40px 0;
`
export const UserInfoWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ProfilePhoto = styled.div`
    width : 145px;
    height: 165px;
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Img = styled.img`
    width : 140px;
    height: 160px;
    size: cover;
`
export const UserData = styled.div`
    padding: 0 40px;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const MiniNameWrap = styled.div`
    display: flex;
    margin-bottom: 15px;
    padding-top: 20px;
`
export const PHandEmailWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const EditBT = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 0 5px;
    border: 1px solid black;
    margin-left: 10px;
    &:hover {
        background-color: black;
        cursor: pointer;
        color : #fff;
        transition: all 0.5s ease;
    }
`
export const UserPaymentInfoWrap = styled.div`
    border-left: 2px dotted #ddd;
    padding: 30px 40px ;
`
export const UserName = styled.h3`
    margin-bottom: 0;
    font-weight: 300;
    color : #1c1c1c;
    font-size: 16px;
`
export const UserNameSpan = styled.span`
    width: 42px;
    height: 20px;
    font-weight: 400;
`
export const H3 = styled.h3`
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: 300;
    color : #1c1c1c;
`
export const TotalPay = styled(H3)`
    font-size: 15px;
    font-weight: 800;
    padding-bottom: 12px;
`
export const Coupon = styled(H3)`
    padding-bottom: 10px;
` 
export const Span = styled.span `
    font-weight: 300;
    margin-left: 20px;
    color: #8d8d8d;
    font-size: 14px;
`
export const SmallSpan = styled.span`
    font-weight: 800;
    color: #8d8d8d;
`
export const A  = styled.a`
    text-decoration: none;
    color: #1c1c1c;
`
export const ProgramSection = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
`
export const Header = styled.div`
    padding: 15px 60px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    border-bottom: 1px solid #e9e9e9;
`
export const Content = styled(Header)`
    font-weight: 300;
`