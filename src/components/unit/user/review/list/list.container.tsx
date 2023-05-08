import { useState } from "react";
import ReviewListUI from "./list.presenter"
import { getListQuery } from "./listFn/getList"
import { usePagination } from "../../../../../commons/util/hooks/pagination";

export default function ReviewList(){
    const {data,topReview,currentPage,startPage,onClickNextPage,onClickPage,onClickPrevPage} = usePagination()
    // const {data,refetch,topReview} = getListQuery(1)
    return <ReviewListUI  data={data}
                          topREview={topReview?.data}
                          currentPage={currentPage}
                          startPage={startPage}
                          onClickNextPage={onClickNextPage}
                          onClickPage={onClickPage}
                          onClickPrevPage={onClickPrevPage} />
}