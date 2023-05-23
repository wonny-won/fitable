import { useEffect } from "react";
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing";
import { getUserInfoQuery } from "../../../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery";
import { useRouter } from "next/router";

export const useBranchAuthority = ()=>{
    const getloginUser = getUserInfoQuery()
    const router = useRouter()
     useEffect(()=>{
        console.log('dd',!getloginUser.data?.getAllApplyDatas)
        if(router.asPath==='/review/new/' || !getloginUser.data?.getAllApplyDatas){
            alert('잘못된 접근입니다.')
            getloginUser.data?.getAllApplyDatas ? router.push('/mypage') : router.push('/joinus')
        }    
    },[])
}