import MyUI from "./myPage.presenter";
import useAuth from "../../../../commons/util/hooks/useAuth";
import { useState } from "react";
import { getUserInfoQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery";
import { useRouter } from "next/router";

export default function My(props:any){
    // 권한분기 - 다시 해야함
    // useAuth()
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [applyId,setApplyId] = useState('')
    const getUserInfo = getUserInfoQuery()
    const router = useRouter()
    const onClickOpenModal = (e:any)=>{
        setIsModalOpen(!isModalOpen)
        setApplyId(e.target.id)
    }
    const propsWithRouter = (e:any)=>{
        const query = { program : e.target.id }
        router.push({pathname:'/review/new',query})
    }
    console.log(getUserInfo.data?.result)
    return <MyUI getUserInfo={getUserInfo.data?.result}
                userOtherData={getUserInfo.data?.getUserDatas[0]}
                onClickOpenModal={onClickOpenModal}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                getAllApplyData={getUserInfo.data?.getAllApplyDatas}
                applyId={applyId}
                propsWithRouter={propsWithRouter}/>
}