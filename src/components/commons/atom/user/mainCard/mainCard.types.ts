import { Dispatch, SetStateAction } from "react";

export interface MainCardProps {
    title: string;
    showModal?: (e: any) => void;
    isModalOpen? : boolean;
    setIsModalOpen? : Dispatch<SetStateAction<boolean>> | undefined;
    program?: string;
    onClickRotateCard?: () => void;
    isClick?: boolean;
    menuTitle?: string;
}
