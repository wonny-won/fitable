import { ChangeEvent } from "react";

export interface MypageEditPresenter {
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    getUserInfo: unknown | any;
    image: string[];
    routerhook: (path: string) => () => void;
    uploadImage: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickUpdateProfile: () => Promise<void>;
}