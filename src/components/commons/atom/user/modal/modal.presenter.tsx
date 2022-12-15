import { ModalPresenter } from './modal.types';
import ProgramDetailModal from '../../../../unit/user/programModalDetail/modalDetail.container';
import * as S from './modal.style'

export default function UseModalUI(props:ModalPresenter){
  return (
    <>
      <S.ModalBody title="Basic Modal" 
             open={props.isModalOpen}  
             onCancel={props.handleCancel}
             width={1000}>
        <ProgramDetailModal program={props.program}/>
      </S.ModalBody>
    </>
  );
}