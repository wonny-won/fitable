export interface ReviewListPresenterProps {
    data: { pageArr: any[]; fetchDataCount: number; } | undefined;
    topREview: any[] | undefined;
    currentPage: number;
    startPage: number;
    onClickNextPage: () => void;
    onClickPage: (event: any) => Promise<void>;
    onClickPrevPage: () => void;
    lastPage: () => Promise<number>;
}