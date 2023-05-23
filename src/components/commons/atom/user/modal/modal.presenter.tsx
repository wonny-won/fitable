import { ModalPresenter } from './modal.types';
import ProgramDetailModal from '../../../../unit/user/programModalDetail/modalDetail.container';
import * as S from './modal.style'
import { useRouter } from 'next/router';
import ApplicationDetail from '../../../../unit/user/applictionDetailsModal/detail.container';

export default function UseModalUI(props:ModalPresenter){
  const router = useRouter()
  return (
    <>
        {   
          props.isModalOpen &&  
            <S.ModalBody title="Basic Modal" 
              open={true}  
              onCancel={props.handleCancel}
              width={ router.asPath==='/' ? (props.isNav ? 500:1000) : 500}>
              {
                router.asPath==='/' && !props.isNav && (<ProgramDetailModal program={props.program} menuTitle={props.menuTitle}/>) 
              }
              {
                router.asPath==='/mypage/' && !props.isNav && (<ApplicationDetail applyId={props.applyId}/>)
              }
              {
                props.isNav && 
                <div> 
                  <div>[ * 공지 * ]</div>
                  <div>곧! 포트폴리오 배틀로 만나요~</div>
                  <S.NavPopUp src='/popUp.png'/> 
                </div>
              }
          </S.ModalBody>
      }    
    </>
  );
}