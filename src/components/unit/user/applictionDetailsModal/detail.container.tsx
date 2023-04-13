import { useQuery, useQueryClient } from "@tanstack/react-query"
import ApplicationDetailUI from "./detail.presenter"
import { loggedInUser } from "../../../../commons/util/functions/firebase/getUserInfo"
import { getData } from "../../../../commons/util/functions/firebase/getDoc"

export default function ApplicationDetail(){
    useQueryClient()
    const getUserInfo = useQuery({
        queryKey: ['userInfo'],
        queryFn: loggedInUser
    })
    const {data} = useQuery(
        // 'applyData',
       getData({docCollection:'applyData',docId: getUserInfo.data?.result.localId})
    )
    // const result = getData({docCollection:'applyData',docId:getUserInfo.data?.result.localId})
    console.log(data)
    return <ApplicationDetailUI data={getUserInfo.data?.userData}/>
}