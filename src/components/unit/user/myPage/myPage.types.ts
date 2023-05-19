import { UseQueryResult } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

export interface UserInfoData {
    getUserInfo: unknown | any; 
    userOtherData: any;
    onClickOpenModal: (e: any) => void;
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    getAllApplyData: boolean | any[] | undefined;
    applyId: string;
    propsWithRouter: (e: any) => void;
    myReview: any[] | undefined;
}
