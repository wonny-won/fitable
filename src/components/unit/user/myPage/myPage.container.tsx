import MyUI from "./myPage.presenter";
import { loggedInUser } from "../../../../commons/util/functions/firebaseFunctions";
import { useQuery,useQueryClient } from "@tanstack/react-query";
import UseAuth from "../../../../commons/util/hooks/useAuth";
import { useEffect } from "react";

export default function My(){
    // useEffect(()=>{
    //     UseAuth()
    // },[])
    UseAuth()
    useQueryClient()
    const getUserInfo = useQuery({
        queryKey: ['userInfo'],
        queryFn: loggedInUser
    })
    return <MyUI getUserInfo={getUserInfo.data}/>
}