import { Dispatch, SetStateAction } from "react";

export interface MainCardProps {
    image? : string ;
    showModal?: () => void;
    isModalOpen? : boolean;
    setIsModalOpen? : Dispatch<SetStateAction<boolean>> | undefined;
    program?: string;
}
