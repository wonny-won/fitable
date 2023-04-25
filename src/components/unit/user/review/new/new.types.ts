import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface NewReview{
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    handleChange: (value: string) => void;
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
    imgURL: string;
    setValue: Dispatch<SetStateAction<number>>;
    onClcickSubmitReview: (data: any) => Promise<void>;
    program: string | string[] | undefined;
    realvalue?: number;
    userInfo?:{
        displayName?: string;
        photoUrl?: string;
        email: string
    } |unknown
}

export interface NewReviewContainer {
    isEdit : boolean;
    data?: any[];
}