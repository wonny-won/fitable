import { useRouter } from "next/router"
import ReviewDetaillUI from "./detail.presenter"
import { fetchDetailDataQuery } from "../../../../../commons/util/functions/reactQuery/useQuery/fetchDataQuery" 
import { Loading } from "./detail.style"

export default function ReviewDetail(){
    const router = useRouter()
    const docId = router.query.reviewId
    const { data,status } = fetchDetailDataQuery(docId)
    if(status==='loading'){
        return <Loading>...loading</Loading>
    }
    return <ReviewDetaillUI data={data}
                            docId={docId}/>
}