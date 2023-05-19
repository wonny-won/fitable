export interface NavProps{
    isActive : boolean;
    onClickMenuBt: () => void;
    isLogin: any;
    routing:(path: string) => () => void;
    signOut: () => void;
}
