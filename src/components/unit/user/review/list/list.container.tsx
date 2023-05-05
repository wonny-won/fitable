import ReviewListUI from "./list.presenter"
import { getListQuery } from "./listFn/getList"

export default function ReviewList(){
    const reviewList = getListQuery()
    return <ReviewListUI  data={reviewList?.getRivewList?.data}
                          topREview={reviewList?.topReview?.data} />
}