import { ChangeEvent } from "react";

export interface SignUpPresenter {
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
    emailError: string | undefined;
    passwordError: string | undefined;
    signUpInput: {
        email : string;
        password : string;
        passwordCheck : string;
    };
}