import { ChangeEvent } from "react";

export interface SignUpPresenter {
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    emailError: string | undefined;
    passwordError: string | undefined;
    signUpInput: {
        email : string;
        password : string;
        passwordCheck : string;
    } | {};
    numberBool:boolean;
    englishBool:boolean;
    onSubmit: () => void;
}