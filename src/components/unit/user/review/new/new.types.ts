import { ChangeEvent } from "react";
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface NewReview{
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    handleChange: (value: string) => void;
    program: string | string[] | undefined;
}

export interface NewReviewContainer {
    isEdit : boolean;
    data?: any[];
}