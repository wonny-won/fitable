import { ChangeEvent } from "react";
import { HOFParams } from "./detailFn/onClickUpdateAppltData";

export interface ApplicationDetailProps{
    data: any;
    isEdit: boolean;
    onChangeInputs: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
    file: never[];
    inputs: {};
    onClickEdit: () => void;
    onClickEditReview: ({ inputs, file }: HOFParams) => () => Promise<void>
}

export interface ApplicationDetailConainerProps{
    applyId?: string;
}