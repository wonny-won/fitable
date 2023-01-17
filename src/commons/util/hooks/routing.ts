import { useRouter } from "next/router"

// 라우팅 커스텀 훅
export const useRoutingPageHooks = ()=>{
    const router = useRouter()
    return (path:string)=>()=>{
        void router.push(path)
    }
}