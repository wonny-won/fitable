import { useState } from "react";
import { getListQuery } from "../../../components/unit/user/review/list/listFn/getList";

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
      setStartPage((prev) => prev - 10);
    };
      // 다음 페이지 클릭 시 실행할 함수
    const onClickNextPage = () => {
      setStartPage((prev) => prev + 10);
    };
    console.log(currentPage,data)
    return {
        currentPage,
        onClickPage,
        data,
        topReview,
        startPage,
        onClickPrevPage,
        onClickNextPage
    }
    
}