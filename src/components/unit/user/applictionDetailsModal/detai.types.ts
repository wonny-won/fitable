import { ChangeEvent } from "react";

export interface ApplicationDetailProps{
    data: any;
    isEdit: boolean;
    onClickEdit: () => void;
    onChangeInputs: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
    file: string;
    inputs: {};
    userUID: any;
    applyId: string;
}

export interface ApplicationDetailConainerProps{
    applyId: string;
}