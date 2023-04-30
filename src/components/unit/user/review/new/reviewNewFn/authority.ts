import { useEffect } from "react";
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing";

interface Param {
    program:string|string[]|undefined;
}

export const useBranchAuthority = (program:Param)=>{
    const routerHooks = useRoutingPageHooks()
    useEffect(()=>{
        if(!program){
            alert('잘못된 접근입니다.')
            routerHooks('/mypage')()
        }    
    },[])
}