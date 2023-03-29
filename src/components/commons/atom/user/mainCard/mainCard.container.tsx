import { useState } from "react";
import MainCardUI from "./mainCard.presenter"
import { MainCardProps } from "./mainCard.types"
// import { onClickPayment } from "../../../../../commons/util/function"

export default function MainCard(props:MainCardProps){
    console.log(props)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
   
    return <MainCardUI
                    title={props.title}
                    // onClickPayment={onClickPayment}
                    showModal={showModal} 
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}/>
}