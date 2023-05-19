import { DocumentData } from "firebase/firestore";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface NewReview{
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
    imgURL: any;
    setValue: Dispatch<SetStateAction<number>>;
    onClickSubmitReview: (data: any) => Promise<void>;
    program: string | string[] | undefined;
    realvalue?: number;
    userInfo?:any;
    isEdit: boolean;
    data: any;
    onClickUpdateReview: (data: any) => Promise<void>
}

export interface NewReviewContainer {
    isEdit : boolean;
    data?:  boolean | void | DocumentData | undefined;
}