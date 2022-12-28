import styled from "@emotion/styled";

export const Button = styled.button`
    background-color: ${props=>props.color};
    border: 1px solid ${props=>props.color};
    border-radius: 8px;
    padding: 18px 23px;
    color : #fff;
    font-size: 20px;
    font-weight: 600;
    &:hover{
        cursor: pointer;
    }
` 