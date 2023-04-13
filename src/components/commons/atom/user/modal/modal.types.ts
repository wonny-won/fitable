import { Dispatch, SetStateAction } from "react";

export interface ModalPresenter {
    isModalOpen: boolean | undefined;
    handleCancel: () => void ;
    program?: string;
    data? : any[];
    reviewId:string | undefined;
    menuTitle?: string | undefined;
}
export interface Modalcontainer {
    isModalOpen: boolean | undefined;
    setIsModalOpen: Dispatch<SetStateAction<boolean>> | undefined;
    program?: string;
    reviewId?: string;
    menuTitle?: string | undefined;
}