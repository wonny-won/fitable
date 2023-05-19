import MyUI from "./myPage.presenter";
import { useAuth } from "../../../../commons/util/hooks/useAuth";
import { getUserInfoQuery } from "../../../../commons/util/functions/reactQuery/useQuery/getUserInfoQuery";
import { getMyReviewQuery } from "./mypageFn/getMyReviewQuery";
import { useQueryStringProps } from "./mypageFn/queryStringProps";
import { useOpenModal } from "./mypageFn/openModal";

export default function My(){
    useAuth()
    const {data}:any= getUserInfoQuery()
    const myReview = getMyReviewQuery(data?.result?.localId)
    const propsWithRouter = useQueryStringProps()
    const {applyId,isModalOpen,setIsModalOpen,onClickOpenModal} = useOpenModal()
    return <MyUI getUserInfo={data?.result}
                userOtherData={data?.getUserDatas?.[0]}
                onClickOpenModal={onClickOpenModal}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                getAllApplyData={data?.getAllApplyDatas}
                applyId={applyId}
                propsWithRouter={propsWithRouter}
                myReview={myReview?.data} />
}