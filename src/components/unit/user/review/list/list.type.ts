import { Dispatch, ChangeEvent, SetStateAction, MouseEventHandler } from "react";

export interface ReviewListPresenterProps {
    data: any[] | undefined;
    topREview: any[] | undefined;
    currentPage: number;
    startPage: number;
    onClickNextPage: () => void;
    onClickPage: (event: any) => Promise<void>;
    onClickPrevPage: () => void;
    lastPage: () => Promise<number>;
}