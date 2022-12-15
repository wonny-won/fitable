import UseModalUI from './modal.presenter';
import { Modalcontainer } from './modal.types';

export default function UseModal(props: Modalcontainer){
  // const handleOk = () => {
  //   props.setIsModalOpen(false);
  // };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  return <UseModalUI isModalOpen={props.isModalOpen}
                     handleCancel={handleCancel}
                     program={props.program} />
};

