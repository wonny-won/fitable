import { Dispatch, SetStateAction } from "react";

export interface ModalPresenter {
    isModalOpen: boolean | undefined;
    handleCancel: () => void ;
    program?: string;
    data? : any[];
    reviewId:string | undefined;
    onClickPayment: () => void
}
export interface Modalcontainer {
    isModalOpen: boolean | undefined;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    program?: string;
    reviewId?: string;
}