import { ModalPresenter } from './modal.types';
import ProgramDetailModal from '../../../../unit/user/programModalDetail/modalDetail.container';
import * as S from './modal.style'
import { useRouter } from 'next/router';
import ReviewModalDetail from '../../../../unit/user/review/detail/reviewModal.container';
import ApplicationDetail from '../../../../unit/user/applictionDetailsModal/detail.container';

export default function UseModalUI(props:ModalPresenter){
  const router = useRouter()
  
  return (
    <>
      <S.ModalBody title="Basic Modal" 
             open={props.isModalOpen}  
             onCancel={props.handleCancel}
             width={ router.asPath==='/' ? 1000 : 500}>
        {
          router.asPath==='/' && (<ProgramDetailModal program={props.program} menuTitle={props.menuTitle}/>) 
        }
        {
          router.asPath==='/review' && (<ReviewModalDetail reviewId={props.reviewId} menuTitle={props.menuTitle}/>)
        }
        {
          router.asPath==='/mypage' && (<ApplicationDetail/>)
        }

      </S.ModalBody>
    </>
  );
}