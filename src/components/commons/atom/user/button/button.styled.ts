import styled from "@emotion/styled";

export const Button = styled.button`
    background-color: ${props=>props.color};
    border: 1px solid ${props=>props.color};
    border-radius: 8px;
    padding: 13px 20px;
    color : #fff;
    font-size: 18px;
    font-weight: 600;
    &:hover{
        cursor: pointer;
    }
` 