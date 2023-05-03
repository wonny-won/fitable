import NewReview from "../../../../src/components/unit/user/review/new/new.container"
import { fetchDetailDataQuery } from "../../../../src/commons/util/functions/reactQuery/useQuery/fetchDataQuery"
import { useRouter } from "next/router"

export default function ReviewEditPage(){
    const router = useRouter()
    const {data} = fetchDetailDataQuery(router.query.reviewId)
    return <NewReview isEdit={true}
                      data={data}/>
}