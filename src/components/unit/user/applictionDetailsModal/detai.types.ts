import { ChangeEvent } from "react";
import { Params } from "./detailFn/onClickUpdateAppltData";

export interface ApplicationDetailProps{
    data: any;
    isEdit: boolean;
    onChangeInputs: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
    file: never[];
    inputs: {};
    onClickEditReview: ({ inputs, file }: Params) => () => Promise<void>;
    onClickEdit: () => void;
}

export interface ApplicationDetailConainerProps{
    applyId: string;
}