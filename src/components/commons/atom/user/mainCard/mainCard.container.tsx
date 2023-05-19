import MainCardUI from "./mainCard.presenter"
import { MainCardProps } from "./mainCard.types"
import { useShowModal } from "./mainCardFn/showModal";
import { useIsClick } from "./mainCardFn/isClick";

export default function MainCard(props:MainCardProps){
    const {showModal,isModalOpen,setIsModalOpen,menuTitle} = useShowModal()
    const {isClick,onClickRotateCard} = useIsClick()
    return <MainCardUI
                    title={props.title}
                    showModal={showModal} 
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    onClickRotateCard={onClickRotateCard}
                    isClick={isClick}
                    menuTitle={menuTitle}/>
}