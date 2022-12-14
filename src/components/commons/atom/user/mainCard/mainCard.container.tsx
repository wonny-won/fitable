import { useState } from "react";
import MainCardUI from "./mainCard.presenter"
import { MainCardProps } from "./mainCard.types"
// import { onClickPayment } from "../../../../../commons/util/function"

export default function MainCard(props:MainCardProps){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
   
    return <MainCardUI image={props.image} 
                    // onClickPayment={onClickPayment}
                    showModal={showModal} 
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}/>
}