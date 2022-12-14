import { Dispatch, SetStateAction } from "react";

export interface ModalPresenter {
    isModalOpen: boolean ;
    handleOk: () => void ;
    handleCancel: () => void ;
    program?: string;
}
export interface Modalcontainer {
    isModalOpen: boolean ;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    program?: string;
}