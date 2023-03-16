import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const MyPage = styled.h1`
    font-size: 24px;
    font-weight: bold;
`
export const UserInfoSection = styled.section`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 85%;
    padding: 0px 60px;
    border: 2px solid #e9e9e9;
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    justify-content: space-between;
    padding: 45px 0;
`
export const EditBT = styled.div`
    display: flex;
    align-items: center;
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
    border-left: 3px dotted #ddd;
    padding: 30px 40px ;
`
export const UserName = styled.h3`
    margin-bottom: 0;
    font-weight: 300;
    color : #1c1c1c;
    font-size: 22px;
`
export const UserNameSpan = styled.span`
    font-weight: 400;
`
export const H3 = styled.h3`
    margin-bottom: 0;
    font-size: 22px;
    font-weight: 300;
    color : #1c1c1c;
`
export const Span = styled.span `
    font-weight: 300;
    margin-left: 20px;
    color: #8d8d8d;
    font-size: 18px;
`
export const A  = styled.a`
    text-decoration: none;
    color: #1c1c1c;
`
