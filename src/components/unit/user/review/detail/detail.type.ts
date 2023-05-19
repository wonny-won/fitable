import { DocumentData } from "firebase/firestore";

export interface ReviewDetailPresenter{
    data: any; 
    docId: string | string[] | undefined;
}