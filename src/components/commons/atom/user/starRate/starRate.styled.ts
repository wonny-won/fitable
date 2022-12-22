import styled from "@emotion/styled";
import { Rate } from 'antd';

export const Star = styled(Rate)`
    :where(.css-dev-only-do-not-override-26rdvq).ant-rate{
       font-size: 15px;
       color: #E9D7C1;
    }
    /* :where(.css-dev-only-do-not-override-26rdvq).ant-rate .ant-rate-star-first, :where(.css-dev-only-do-not-override-26rdvq).ant-rate .ant-rate-star-second{
        color: rgba(0,0,0, 0.28);
        user-select: none;
    } */
`
export const Text = styled.span`
    color: #E9D7C1;
    font-weight: 400;
`