import { useRouter } from "next/router"

// 진행한 program 명 쿼리스트링으로 넘겨주기 - 신규 작성
export const useQueryStringProps = ()=>{
    const router = useRouter()
    const propsWithRouter = (e:any)=>{
        const query = { program : e.target.id }
        router.push({pathname:'/review/new',query})
    }
    return propsWithRouter
}