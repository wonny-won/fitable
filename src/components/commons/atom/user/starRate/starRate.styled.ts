import styled from "@emotion/styled";
import { Rate } from 'antd';

interface Params {
    path: string | string[] | undefined;
}

export const Star = styled(Rate)`
   :where(.css-dev-only-do-not-override-1vtf12y).ant-rate{
       font-size: ${(props:Params)=>(props.path==='/review' ? '12px' : '20px')};
    };
`
export const Text = styled.span`
    font-weight: 400;
    color: #fadb14;
`