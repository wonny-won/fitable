import styled from "@emotion/styled";

interface BorderProps {
    border : string
}

export const Contatiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
`
export const Title = styled.div`
    font-size: 60px;
    font-weight: 400;
    padding-bottom: 10px;
`
export const Span = styled.span`
    margin: 0 13px;
    font-weight: 300;
`
export const ContentsWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const LoginBox =  styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border-right: 2px solid #e9e9e9;
    padding-bottom: 35px;
`
export const JoinUsBox =  styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50p;
    justify-content: space-evenly;
    flex-direction: column;
    width: 50%;
    padding-bottom: 35px;
    padding-left:6%;
`

export const SginUPIN = styled.h2`
    font-size: 18px;
    color: #363636;
    font-weight: semi-bold;
    width: 100%;
    padding: 35px 0 0 20px;
`
export const SginUPINExplain = styled.div`
    font-size: 11px;
    color: #adadad;
    padding-left: 20px;
`
export const ForgotIDPWWrap = styled.div`
    padding-top: 20px;
`
export const Input =  styled.input`
    width: 80%;
    padding: 13px 15px;
    background-color: ${props => props.color};
    border:1px solid ${(props:BorderProps) => props.border};
    margin: 20px 0 0 20px;
    outline: none;
    &:focus::-webkit-input-placeholder,textarea:focus::-webkit-input-placeholder{
        color:transparent;
    };
    &:hover{
        cursor:pointer ;
    }
`
export const LoninBT =  styled.button`
    width: 80%;
    height: 58px;
    background-color:#231f20;
    border:1px solid #231f20;
    color : #fff;
    margin: 20px 0 0 20px;
    outline: none;
    &:hover{
        cursor:pointer ;
    }
`
export const BTForm =  styled.button`
    width: 80%;
    height: 58px;
    background-color:#fff;
    border:1px solid #231f20;
    color : #231f20;
    margin: 20px 0 0 20px;
    outline: none;
    &:hover{
        cursor:pointer ;
    }
`
