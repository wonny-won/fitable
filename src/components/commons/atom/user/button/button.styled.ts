import styled from "@emotion/styled";

export const Button = styled.button`
    background-color: ${props=>props.color};
    border: 1px solid ${props=>props.color};
    border-radius: 4px;
    padding: 10px 15px;
    color : #fff;
    font-size: 15px;
    font-weight: 400;
    &:hover{
        cursor: pointer;
    }
` 