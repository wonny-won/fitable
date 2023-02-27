import MyUI from "./myPage.presenter";
import { loggedInUser } from "../../../../commons/util/functions/firebaseFunctions";
import { useQuery,useQueryClient } from "@tanstack/react-query";

export default function My(){
    const queryClient = useQueryClient()
    const getUserInfo = useQuery({
        queryKey: ['userInfo'],
        queryFn: loggedInUser
    })
    console.log(getUserInfo.data)
    return <MyUI getUserInfo={getUserInfo.data}/>
}