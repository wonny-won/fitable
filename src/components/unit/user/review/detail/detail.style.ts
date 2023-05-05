import styled from "@emotion/styled";

export const Error = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
`
export const Loading = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
`
export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 0 2%;
`
export const GoBackWrap = styled.div`
    padding: 5px;
`
export const Goback = styled.img`
    width: 60px;
    height: 10px;
`
export const GobackText = styled.div`
    padding-top: 10px;
`
export const H1 = styled.h1`
    display: none;
`
export const H2 = styled.h2`
    display: none;
`
export const H3 = styled.h3`
    display: none;
`
export const CarouselSection = styled.section`
    padding: 50px 0;
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    font-size: 14px;
    overflow: auto;
`
export const ProgramTilte = styled.h3`
    font-size: 30px;
`
export const UserWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border: 1px solid #ebeff5;
    border-radius: 4px;
    padding: 20px;
    margin: 20px 0;
`
export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0 ;
`
export const UserProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50% 50%;
    margin-right: 20px;
`
export const UserNameSpan = styled.span`
    font-size: 10px;
`
export const OverAll = styled.div`
    width: 71%;
    font-size: 12px;
    color: #707680;
    font-family: 'SUIT-Regular';
    padding: 12px 0;
`
export const OverAllSpan = styled.span`
    font-size: 12px;
    font-weight: 800;
`
export const Content = styled.div`
    p,span{
        font-family: 'SUIT-Regular';;
        font-weight: 500;
        line-height: 1.43;
        color: #14161a;
    }
    padding: 20px 10px; 
    height: 250px;
    overflow: auto;
    margin-bottom: 30px;
`
export const HelpfulWrap = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 30px;
`
export const Helpful = styled.div`
    color: #707680;
    font-size: 12px;
    margin-right: 10px;
    padding: 0px 5px;
    font-family: 'SUIT-Regular';
    font-weight: 300;
    &:hover{
        cursor: pointer;
    }
`
export const Line = styled.hr`
    width: 100%;
    height: 1px;
    border: none;
    background-color:  #ebeff5;
`