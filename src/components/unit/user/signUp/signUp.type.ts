import { ChangeEvent } from "react";
import { AnyObject, StringSchema } from "yup";

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
    schema: Promise<{
        result: boolean;
        schema: StringSchema<string | undefined, AnyObject, undefined, "">;
    }>

}