export interface NavProps{
    isActive : boolean;
    onClickMenuBt: () => void;
    isLogin: boolean;
    signOut: () => void;
    routing:(path: string) => () => void
}
export interface NavContainerProps{
    isLogin: boolean;
}