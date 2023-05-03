import MyUI from "./myPage.presenter";
import useAuth from "../../../../commons/util/hooks/useAuth";
import { getUserInfoQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery";
import { getMyReviewQuery } from "./mypageFn/getMyReviewQuery";
import { useQueryStringProps } from "./mypageFn/queryStringProps";
import { useOpenModal } from "./mypageFn/openModal";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing";

export default function My(props:any){
    // 권한분기 - 다시 해야함
    // useAuth()
    const getUserInfo = getUserInfoQuery()
    const myReview = getMyReviewQuery(getUserInfo.data?.result?.localId)
    const propsWithRouter = useQueryStringProps()
    const routerHooks = useRoutingPageHooks()
    const {applyId,isModalOpen,setIsModalOpen,onClickOpenModal} = useOpenModal()

    return <MyUI getUserInfo={getUserInfo.data?.result}
                userOtherData={getUserInfo.data?.getUserDatas[0]}
                onClickOpenModal={onClickOpenModal}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                getAllApplyData={getUserInfo.data?.getAllApplyDatas}
                applyId={applyId}
                propsWithRouter={propsWithRouter}
                myReview={myReview?.data}
                routerHooks={routerHooks}/>
}