import { useEffect, useState } from "react";
import { getUserInfoQuery } from "../../../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery";
import { useRouter } from "next/router";

export const useBranchAuthority = (userInfo:any)=>{
    const getloginUser = getUserInfoQuery()
    const [data,setData] = useState('')
    const router = useRouter()
     useEffect(()=>{
        setTimeout(()=>{
            setData(userInfo)
            if(router.asPath==='/review/new/' || data){
                alert('잘못된 접근입니다.')
                getloginUser.data ? router.push('/mypage') : router.push('/joinus')
            }        
        },1000)
    },[])
}