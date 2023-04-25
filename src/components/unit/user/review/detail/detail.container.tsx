import { useRouter } from "next/router"
import ReviewDetaillUI from "./detail.presenter"
import { fetchDetailDataQuery } from "./detailFn/fetchDataQuery"

export default function ReviewDetail(){
    const router = useRouter()
    const docId = router.query.reviewId
    const fetchData = fetchDetailDataQuery(docId)
    console.log(fetchData)
    return <ReviewDetaillUI />
}