import { ModalPresenter } from './modal.types';
import ProgramDetailModal from '../../../../unit/user/programModalDetail/modalDetail.container';
import * as S from './modal.style'
import { useRouter } from 'next/router';

export default function UseModalUI(props:ModalPresenter){
  const router = useRouter()
  return (
    <>
      <S.ModalBody title="Basic Modal" 
             open={props.isModalOpen}  
             onCancel={props.handleCancel}
             width={1000}>
        {
          router.asPath==='/' ? (<ProgramDetailModal program={props.program}/>) : (<div>빈 모달!</div>)
        }
      </S.ModalBody>
    </>
  );
}