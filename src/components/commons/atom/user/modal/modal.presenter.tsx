import { Modal } from 'antd';
import { ModalPresenter } from './modal.types';
import ProgramDetailModal from '../../../../unit/user/programModalDetail/modalDetail.container';

export default function UseModalUI(props:ModalPresenter){
  return (
    <>
      <Modal title="Basic Modal" 
             open={props.isModalOpen}  
             onOk={props.handleOk} 
             onCancel={props.handleCancel}
             width={1000}>
        <ProgramDetailModal />
      </Modal>
    </>
  );
}