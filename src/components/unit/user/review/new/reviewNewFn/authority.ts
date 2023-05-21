import { useEffect, useState } from "react";
import { useRoutingPageHooks } from "../../../../../../commons/util/hooks/routing";

interface Param {
    program:any;
    isEdit: boolean;
}

export const useBranchAuthority = ({program,isEdit}:Param)=>{
    // const [applyProgram,setapplyProgram] = useState()
    const routerHooks = useRoutingPageHooks()
    console.log(program)
    setTimeout((program:any)=>{
        console.log('setTimeout',program)
        if(!program && !isEdit){
            console.log('if',program)
            alert('잘못된 접근입니다.')
            routerHooks('/mypage')()
        }     
    },5000,program,isEdit)
    // useEffect(()=>{
    //     setapplyProgram(program)    
    //     if(!applyProgram && !isEdit){
    //         console.log('if',applyProgram)
    //         alert('잘못된 접근입니다.')
    //         routerHooks('/mypage')()
    //     }      
    // },[])
}