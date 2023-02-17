import { Dispatch, SetStateAction } from "react";

export interface AboutPresenter {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    showModal: () => void;
}