import MyUI from "./myPage.presenter";
import { loggedInUser } from "../../../../commons/util/functions/firebaseFunctions";
import { useQuery,useQueryClient } from "@tanstack/react-query";
import useAuth from "../../../../commons/util/hooks/useAuth";

export default function My(){
    // 권한분기
    useAuth()
    
    useQueryClient()
    const getUserInfo = useQuery({
        queryKey: ['userInfo'],
        queryFn: loggedInUser
    })
    return <MyUI getUserInfo={getUserInfo.data}/>
}