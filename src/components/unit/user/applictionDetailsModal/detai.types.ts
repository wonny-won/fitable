import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ApplicationDetailProps{
    data: any;
    isEdit: boolean;
    onClickEdit: () => void;
    onChangeInputs: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClickUpdateAppltData: (data: any) => void;
    uploadFile: (storageName: string) => (e: ChangeEvent<HTMLInputElement>) => void;
}