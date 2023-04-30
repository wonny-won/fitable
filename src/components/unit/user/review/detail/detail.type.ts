import { DocumentData } from "firebase/firestore";

export interface ReviewDetailPresenter{
    data: void | undefined|{
        overAll?:string;
        userId:string;
        program:string;
        fileURL?:string;
        reviewContents?:string;
        starValue?:number;
        writer?: string;
        writerProfile?: string;

    } | DocumentData; 
    // data: undefined | void | DocumentData | false ;
    // {
    //     overAll?:string;
    //     userId:string;
    //     program:string;
    //     fileURL?:string;
    //     reviewContents?:string;
    //     starValue?:number;
    //     writer?: string;
    //     writerProfile?: string;
    // } 
}