import { ModalDetailPresenter } from "./modalDetail.types"
import AllFeedback from "./portfolioFeedback/all"
import FunctionalFeedback from "./portfolioFeedback/functional"
import PageFeedback from "./portfolioFeedback/page"
import ResumeGuide from "./resume/guide"
import ResumeFeedback from "./resume/partFeedback"
import * as S from './modalDetail.style'

export default function ProgramDetailModalUI(props:ModalDetailPresenter){
    return(
        <>
        {
            props.menuTitle==='🛠 기능별 피드백' && <FunctionalFeedback/> 
        }
        {
            props.menuTitle==='📄 페이지 단위 피드백' && <PageFeedback/>
        }
        {
            props.menuTitle==='✅ 전체 간이 피드백' && <AllFeedback/> 
        }
        {
            props.menuTitle==='🚦이력서 작성가이드' && <ResumeGuide/> 
        }
        {
            props.menuTitle==='🖍이력서 피드백' && <ResumeFeedback/> 
        }
        <S.A href='/apply'>
        <S.goApply>
            <div>신청하러 가기&nbsp;</div>
            <S.Img src='/backIconRight.svg'/>
        </S.goApply>
        </S.A>
        </>
    )
}