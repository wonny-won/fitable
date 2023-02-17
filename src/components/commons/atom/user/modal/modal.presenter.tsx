import { ModalPresenter } from './modal.types';
// import ProgramDetailModal from '../../../../unit/user/programModalDetail/modalDetail.container';
import * as S from './modal.style'
import { useRouter } from 'next/router';
// import ReviewModalDetail from '../../../../unit/user/review/detail/reviewModal.container';
import Head from 'next/head';

export default function UseModalUI(props:ModalPresenter){
  const router = useRouter()
  return (
    <>
      <Head>
        {/* {/* 결제 - jQuery */}
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
        {/* 결제 - iamport.payment.js */}
        <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script> 

      </Head>
      <S.ModalBody title="Basic Modal" 
             open={props.isModalOpen}  
             onCancel={props.handleCancel}
             width={ router.asPath==='/' ? 1000 : '100%'}>
        {/* {
          router.asPath==='/' ? (<ProgramDetailModal program={props.program}/>) : (<ReviewModalDetail reviewId={props.reviewId}/>)
        } */
        props.payment()
        }
      </S.ModalBody>
    </>
  );
}