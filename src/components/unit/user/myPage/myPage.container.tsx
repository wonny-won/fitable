import MyUI from "./myPage.presenter";
import { loggedInUser } from "../../../../commons/util/functions/firebase/getUserInfo";
import { useQuery,useQueryClient } from "@tanstack/react-query";
import useAuth from "../../../../commons/util/hooks/useAuth";

export default function My(){
    // 권한분기 - 안됨
    // useAuth()

    // const {userData,result} = loggedInUser()
    
    useQueryClient()
    const getUserInfo = useQuery({
        queryKey: ['userInfo'],
        queryFn: loggedInUser
    })
    console.log(getUserInfo)
    return <MyUI getUserInfo={getUserInfo.data?.result}
                userOtherData={getUserInfo.data?.userData}/>
}