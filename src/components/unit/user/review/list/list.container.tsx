import ReviewListUI from "./list.presenter"
import { usePagination } from "../../../../../commons/util/hooks/pagination";

export default function ReviewList(){
    const {data,topReview,currentPage,startPage,onClickNextPage,onClickPage,onClickPrevPage,allreviewCount} = usePagination()
    return <ReviewListUI  data={data}
                          topREview={topReview?.data}
                          currentPage={currentPage}
                          startPage={startPage}
                          onClickNextPage={onClickNextPage}
                          onClickPage={onClickPage}
                          onClickPrevPage={onClickPrevPage}
                          lastPage={allreviewCount} />
}