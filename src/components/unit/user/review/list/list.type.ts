import { Dispatch, ChangeEvent, SetStateAction, MouseEventHandler } from "react";

export interface ReviewListPresenterProps {
    onClickOpenModal: (event: ChangeEvent<HTMLDivElement>) => void;
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    data: any[];
    reviewId: string;
}