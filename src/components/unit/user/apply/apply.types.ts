import { ChangeEvent, ChangeEventHandler } from "react";

export interface ApplyPresenterProps{
    onClickSubmit: (e: any) => void;
    onChangeInputs: (event: ChangeEvent<HTMLTextAreaElement>|ChangeEvent<HTMLInputElement>)=> any;
    onChangeProgram: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}