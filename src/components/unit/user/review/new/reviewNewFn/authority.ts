import { useEffect } from "react";
import { useRouter } from "next/router";

export const useBranchAuthority = ()=>{
    const router = useRouter()
    useEffect(()=>{
        if(router.asPath==='/review/new/'){
            alert('잘못된 접근입니다.')
            router.push('/')
        }        
    },[])
}