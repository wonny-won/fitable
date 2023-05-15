export interface NavProps{
    isActive : boolean;
    onClickMenuBt: () => void;
    isLogin: boolean;
    routing:(path: string) => () => void;
    signOut: () => void;
}
