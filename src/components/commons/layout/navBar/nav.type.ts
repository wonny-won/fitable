import { Dispatch, SetStateAction } from "react";

export interface NavProps{
    isActive : boolean;
    onClickMenuBt: () => void;
    isLogin: any;
    routing:(path: string) => () => void;
    signOut: () => void;
    onClickBt: any;
}
