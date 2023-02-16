import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 80%;
    margin : 0 auto;
    padding-right: 5% ;
    color: #231f20;
    font-weight: 300;
`
export const Logo = styled.img`
    width : 70px;
    height: 90px;
    size: cover;
    margin-bottom: 20px;
`
export const IntroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color:rgba(60, 55, 55) ;
    color : #FCF9EF;
    padding: 45px 0;
    margin-top: 30px;
`
export const IntroTitle =  styled.div`
    font-size: 30px;
    font-weight: 400;
`
export const Promise = styled.div`
    padding-top: 10px;
`
export const PromiseSpan = styled.span`
    font-weight: 500;
`
export const DietSection = styled.section`
    display: flex;
    width: 100%;
    height: 500px;
    background-color: #FCF9EF;
`
export const HealingSection = styled.section`
    display: flex;
    width: 100%;
    height: 500px;
    background-color: #FCF9EF;

`
export const Img = styled.img`
    width: 50%;
    height: 100%;
`
export const ProgramWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    font-size: 15px;
`
export const Program = styled.div`
    font-size: 25px;
    padding-bottom: 15px;
    font-weight: 400;
`
export const DietProgram = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ExplainProgramTitle = styled.div`
    padding:15px 0;
    font-size: 18px;
`
export const ExplainProgram = styled.div`
    width: 70%;
`
export const ProgramPoint = styled.div`
    font-weight: 400;
    margin: 20px auto 10px auto;
`
export const JoinProgram = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    transition: color 0.8s, font-weight 0.3s;
    &:hover{
        cursor: pointer;
        color : #8D60F5;
        font-weight: 400;
    }
`
export const Arrow = styled.img`
    width: 110px;
    height: 4px;
    padding-top: 1px;
    font-weight: 400;
    transition: color 1s, font-weight 1s;
    &:hover{
        cursor: pointer;
        color : #8D60F5;
    }

`

