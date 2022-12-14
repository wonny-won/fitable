import styled from "@emotion/styled";
import { Modal } from 'antd';

export const ModalBody = styled(Modal)`
    .ant-modal-content{
        background-color: rgba(95,95,95,0.8);
        padding : 50px;
    }
    .ant-modal-title{
        display: none;
    }
`