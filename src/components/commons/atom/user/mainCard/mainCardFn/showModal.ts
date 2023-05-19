import { useState } from "react";

export const useShowModal = ()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menuTitle ,setMenuTtitle] = useState('')
    const showModal = (e:any) => {
        setIsModalOpen(true);
        setMenuTtitle(e.target.innerText)
    };

    return {
        isModalOpen,
        menuTitle,
        showModal,
        setIsModalOpen
    }

}