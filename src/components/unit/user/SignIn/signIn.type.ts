import { User } from "firebase/auth";
import { ChangeEvent } from "react";

export interface SignInPresenter {
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeEmail:(event: ChangeEvent<HTMLInputElement>) => void;
    signInInput: {
        email: string;
        password: string;
    };
    onSubmit: Promise<User>;
}