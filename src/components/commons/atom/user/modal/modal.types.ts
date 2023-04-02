import { Dispatch, SetStateAction } from "react";

export interface ModalPresenter {
    isModalOpen: boolean | undefined;
    handleCancel: () => void ;
    program?: string;
    data? : any[];
    reviewId:string | undefined;
    onClickPayment: (program: string) => () => Promise<void>;
}
export interface Modalcontainer {
    isModalOpen: boolean | undefined;
    setIsModalOpen: Dispatch<SetStateAction<boolean>> | undefined;
    program?: string;
    reviewId?: string;
}