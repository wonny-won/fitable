import { ChangeEvent } from "react";

export interface JoinUsPresenter {
    router: (path: string) => () => void;
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    inputs: {}
}