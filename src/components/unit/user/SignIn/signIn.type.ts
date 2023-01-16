import { User } from "firebase/auth";
import { ChangeEvent } from "react";

export interface SignInPresenter {
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    signInInput: {
        email: string;
        password: string;
    };
   onSubmit: () => void
}