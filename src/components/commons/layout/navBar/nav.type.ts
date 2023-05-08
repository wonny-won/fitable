export interface NavProps{
    isActive : boolean;
    onClickMenuBt: () => void;
    isLogin: boolean;
    routing:(path: string) => () => void
}
export interface NavContainerProps{
    isLogin: boolean;
}