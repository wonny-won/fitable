import { Dispatch, SetStateAction } from "react";

export interface ReviewListPresenterProps {
    onClickOpenModal: () => void;
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}