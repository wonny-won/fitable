import { useEffect } from "react";
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing";

interface Param {
    program:string|string[]|undefined;
    isEdit: boolean;
}

export const useBranchAuthority = ({program,isEdit}:Param)=>{
    const routerHooks = useRoutingPageHooks()
    useEffect(()=>{
        if(!program && !isEdit){
            alert('잘못된 접근입니다.')
            routerHooks('/mypage')()
        } 
    },[])
}