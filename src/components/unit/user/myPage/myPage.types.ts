import { Dispatch, SetStateAction } from "react";

export interface UserInfoData {
    getUserInfo: unknown | any; 
    userOtherData: unknown | any;
    onClickOpenModal: () => void;
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}