import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface NewReview{
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
    imgURL: string;
    setValue: Dispatch<SetStateAction<number>>;
    onClickSubmitReview: (data: any) => Promise<void>;
    program: string | string[] | undefined;
    realvalue?: number;
    userInfo?:{
        displayName?: string;
        photoUrl?: string;
        email: string
    } |unknown;
    isEdit: boolean;
    data: any[] | undefined;
    onClickUpdateReview: (data: any) => Promise<void>
}

export interface NewReviewContainer {
    isEdit : boolean;
    data?: any[];
}