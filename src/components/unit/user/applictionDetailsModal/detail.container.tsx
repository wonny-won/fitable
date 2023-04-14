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
   const applyData = useQuery({
        queryKey: ['applyData',getUserInfo.data?.result.localId],
        queryFn: ()=>getData({docCollection:'applyData',docId:getUserInfo.data?.result.localId}),
        retry: 3
    })
    console.log(applyData)
   return <ApplicationDetailUI data={getUserInfo.data?.userData}/>
}