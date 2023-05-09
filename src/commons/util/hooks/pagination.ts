import { useState } from "react";
import { getListQuery } from "../../../components/unit/user/review/list/listFn/getList";
import { getDatas } from "../functions/firebase/read/getAllDatas";

export const usePagination = ()=>{
    const [startPage,setStartPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);
    const {data,topReview} = getListQuery(currentPage)

    // 페이지 선택
    const onClickPage = async (event:any) => {
        setCurrentPage(event.target.innerText)
    };
    // 이전 페이지 클릭 시 실행할 함수
    const onClickPrevPage = () => {
        if(startPage===1) return
        setStartPage((prev) => prev - 10);
    };

    // 마지막 페이지 설정
    const allreviewCount = async ()=>{
        const {fetchDataCount} = await getDatas('/programReview',1)
        const lastPage = Math.ceil( fetchDataCount / 12);
        return lastPage
    }

    // 다음 페이지 클릭 시 실행할 함수
    const onClickNextPage = async () => {
        const lastPage = await allreviewCount()
        if (startPage + 5 > lastPage) return;
        setStartPage((prev) => prev + 10);
    };

    return {
        currentPage,
        onClickPage,
        data,
        topReview,
        startPage,
        onClickPrevPage,
        onClickNextPage,
        allreviewCount
    }
}