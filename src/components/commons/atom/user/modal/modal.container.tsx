import UseModalUI from './modal.presenter';
import { Modalcontainer } from './modal.types';

export default function UseModal(props: Modalcontainer){
  const handleCancel = () => {
    props?.setIsModalOpen(false);
  };

  return <UseModalUI isModalOpen={props.isModalOpen}
                     handleCancel={handleCancel}
                     program={props.program}
                     reviewId={props.reviewId}/>
};

