export interface ReviewDetailPresenter{
    data: undefined | {
        overAll?:string;
        userId:string;
        program:string;
        fileURL?:string;
        reviewContents?:string;
        starValue?:number;
    }
}