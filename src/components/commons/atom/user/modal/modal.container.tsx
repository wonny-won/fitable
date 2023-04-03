import UseModalUI from './modal.presenter';
import { Modalcontainer } from './modal.types';
import { onClickPayment } from '../../../../../commons/util/functions/payments';

export default function UseModal(props: Modalcontainer){
  console.log('d',props)
  const handleCancel = () => {
    if(props.setIsModalOpen){ props?.setIsModalOpen(false); }
  };
  return <UseModalUI isModalOpen={props.isModalOpen}
                     handleCancel={handleCancel}
                     program={props.program}
                     reviewId={props.reviewId}
                     onClickPayment={onClickPayment}
                     menuTitle={props.menuTitle}
                     />
};

