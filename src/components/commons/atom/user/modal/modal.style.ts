import styled from "@emotion/styled";
import { Modal } from 'antd';

interface Params {
    isNav?: boolean;
}

export const ModalBody = styled(Modal)`
    .ant-modal-content{
        background-color: rgba(255,255,255);
        padding : 50px;
    }
    .ant-modal-title{
        display: none;
    }
    .ant-modal-footer{
        display: none;
    }
    .ant-modal-wrap{
        background-color:rgba(20,22,26,0.8)
    }
`
export const NavPopUp = styled.img`
    width: 100%;
    size: cover;
`