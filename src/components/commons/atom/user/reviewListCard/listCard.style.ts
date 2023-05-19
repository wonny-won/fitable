import styled from "@emotion/styled"
import { Rate } from 'antd';

export const CardWrap = styled.div`
    width : 215px;
    height: 330px;
    border: 1px solid rgba(0,0,0,0.13);
    margin: 23px ;
    box-shadow: 0 3px 3px rgba(0,0,0,0.1);
    background-color: #fff;
    &:hover{
        cursor: pointer;
    }
`
export const Image = styled.img`
    width: 100%;
    size: cover;
    height: 200px;
    border-bottom:1px solid rgba(0,0,0,0.13) ;
`
export const OneSentenceExplain = styled.div`
    font-size: 12px;
    font-weight: 350;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 5px;
`
export const ProgramInfo = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 400;
    border-top: 1px solid rgba(0,0,0,0.13);
`
export const InfoMinWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px ;
`
export const ProgramImage = styled.img`
    width: 40px;
    height: 40px;
    size: cover;
`
export const ReviewListStar = styled(Rate)`
   :where(.css-dev-only-do-not-override-1vtf12y).ant-rate{
       font-size: 12px;
       color: #E9D7C1;
    }
`
export const Span = styled.span`
    margin: 0 3px;
`
export const NoImg = styled.img`
    width: 100%;
    size: cover;
    height: 200px;
    border-bottom:1px solid rgba(0,0,0,0.13) ;
    padding: 15px 30px;
`

// -------------------------------------------------
export const ThumbnailSection = styled.div`
    display: flex;
    width: 400px;
    border: 3px solid #FFE100;
    border-radius: 15px;
    padding: 30px;
    background-color: #FCF9EF;
    margin: 30px 10px 0 0;
    &:hover{
        cursor: pointer;
    }
`
export const ThumbnailImg = styled.img`
    width: 150px;
    size: cover;
    height: 200px;
    border-bottom:1px solid rgba(0,0,0,0.13) ;
`
export const ProgramReviewWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    align-items: center;
    text-align: center;
    justify-content: space-around;
`
export const ProgramTilte = styled.div`
    padding-bottom: 10px;
`
export const UserWrap = styled.div`
    display: flex;
    font-family: 'SUIT-Regular';
`
export const UserProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50% 50%;
`
export const UserInfo = styled.div`
    font-size: 13px;
    margin-left: 13px;
    padding-top: 5px;
`
