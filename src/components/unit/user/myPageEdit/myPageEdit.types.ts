import { ChangeEvent } from "react";

export interface MypageEditPresenter {
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickUpdateProfile: () => void;
    getUserInfo: unknown | any;
}