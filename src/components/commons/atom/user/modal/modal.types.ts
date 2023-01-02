import { Dispatch, SetStateAction } from "react";

export interface ModalPresenter {
    isModalOpen: boolean ;
    handleCancel: () => void ;
    program?: string;
    data? : any[];
    reviewId:string | undefined;
}
export interface Modalcontainer {
    isModalOpen: boolean ;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    program?: string;
    reviewId:string | undefined;
}