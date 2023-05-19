import { ChangeEvent, useState } from "react";
import MainCardUI from "./mainCard.presenter"
import { MainCardProps } from "./mainCard.types"

export default function MainCard(props:MainCardProps){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClick,setIsClick]=useState(false)
    const [menuTitle ,setMenuTtitle] = useState('')

    const onClickRotateCard = ()=>{
        setIsClick(!isClick)
    }
    const showModal = (e:any) => {
        console.log(e.target.innerText)
        setIsModalOpen(true);
        setMenuTtitle(e.target.innerText)
    };
    return <MainCardUI
                    title={props.title}
                    showModal={showModal} 
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    onClickRotateCard={onClickRotateCard}
                    isClick={isClick}
                    menuTitle={menuTitle}/>
}