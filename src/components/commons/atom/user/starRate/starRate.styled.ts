import styled from "@emotion/styled";
import { Rate } from 'antd';

export const Star = styled(Rate)`
    :where(.css-dev-only-do-not-override-26rdvq).ant-rate{
       font-size: 18px;
       color: #E9D7C1;
    }
    :where(.css-dev-only-do-not-override-26rdvq).ant-rate +.ant-rate-text{
        color: black;
        font-weight: 500;
    }
`
export const Text = styled.span`
    color: #E9D7C1;
    font-weight: 400;
`