import { ChangeEvent } from "react";
import { Params } from "./myPageEditFn/onClickUpdateProfile";

export interface MypageEditPresenter {
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    getUserInfo: unknown | any;
    image: string;
    routerhook: (path: string) => () => void;
    uploadImage: (event: ChangeEvent<HTMLInputElement>) => void;
    inputs:{};
    file: File | string;
    onClickUpdateProfile: () => Promise<void>
}