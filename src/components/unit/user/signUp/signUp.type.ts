import { User } from "firebase/auth";
import { ChangeEvent } from "react";

export interface SignUpPresenter {
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void
}