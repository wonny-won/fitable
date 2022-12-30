import styled from "@emotion/styled";
import { Rate } from 'antd';


export const Container = styled.section`
    width : 73%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
`
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
    /* background-color: #fff; */
`
export const Image = styled.div`
    width: 100%;
    height: 200px;
    border-bottom:1px solid rgba(0,0,0,0.13) ;
`
export const NoImg = styled.img`
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
export const ProgramImage = styled.img`
    width: 40px;
    height: 40px;
    size: cover;
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
export const ReviewListStar = styled(Rate)`
    :where(.css-dev-only-do-not-override-26rdvq).ant-rate{
       font-size: 12px;
       color: #E9D7C1;
    }
`
export const Span = styled.span`
    margin: 0 3px;
`
