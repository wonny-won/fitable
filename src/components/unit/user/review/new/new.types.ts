import { ChangeEvent } from "react";
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface NewReview{
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickBtSubmit: (data: any) => void;
    onClickGetProgramValue: (e: ChangeEvent<HTMLInputElement>) => void;
    uploadImage: (e: ChangeEvent<HTMLInputElement>) => void | undefined;
    image: string;
    onClickUpdateBt: (data: any) => void;
    isEdit: boolean;
    data: any;
}

export interface NewReviewContainer {
    isEdit : boolean;
    data: any[];
}