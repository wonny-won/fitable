import { useRouter } from "next/router"
import ReviewDetaillUI from "./detail.presenter"
import { fetchDetailDataQuery } from "./detailFn/fetchDataQuery"
import { Error,Loading } from "./detail.style"

export default function ReviewDetail(){
    const router = useRouter()
    const docId = router.query.reviewId
    const { data,status } = fetchDetailDataQuery(docId)
    console.log(status)
    if(status==='loading'){
        return <Loading>...loading</Loading>
    }
    return <ReviewDetaillUI data={data}
                            docId={docId}/>
}