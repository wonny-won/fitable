import { useEffect, useState } from "react";
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing";
import { getUserInfoQuery } from "../../../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery";

interface Param {
    program:string|string[]|undefined;
    isEdit: boolean;
    user: string|string[]|undefined;
    reviewWriter: string|string[]|undefined;
}

export const useBranchAuthority = ({program,isEdit,user,reviewWriter}:Param)=>{
    const routerHooks = useRoutingPageHooks()
    const [] = useState('')

    useEffect(()=>{
        console.log(user,reviewWriter)

        if(!program && !isEdit){
            alert('잘못된 접근입니다.')
            routerHooks('/mypage')()
        } 
        // 다시 
        if(isEdit && user!==reviewWriter){
            alert('잘못된 접근입니다.')
        } 
    
    },[])
}