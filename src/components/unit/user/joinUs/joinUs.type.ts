import { ChangeEvent } from "react";

export interface JoinUsPresenter {
    router: (path: string) => () => void
    onClickLogIn: () => void;
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}