import * as S from './mainCard.styled'
import { MainCardProps } from './mainCard.types'
import UseModal from "../modal/modal.container"

export default function MainCardUI(props:MainCardProps){
    const portfolioMenu = ['✅ 전체 간이 피드백','📄 페이지 단위 피드백','🛠 기능별 피드백']
    const resumeMenu = ['🚦이력서 작성가이드','🖍이력서 피드백']
    return(
        <>
            <h1 style={{display: "none"}}>프로그램 카드</h1>
                <S.CardWrap>
                    {/* 카드 앞면 */}
                    <S.FrontProgramCard isClick={props.isClick}>
                    <S.ExplainTitle>
                        {
                            props.title === '포트폴리오 피드백' ? "'끝내주는'" : "'한번에 착-붙는'"
  
                        }
                    </S.ExplainTitle>
                    <S.CardTitle>
                        {
                            props.title === '포트폴리오 피드백' ? "포트폴리오 피드백" : "이력서 피드백"
                        }
                    </S.CardTitle>
                    <S.ExpreienceBT onClick={props.onClickRotateCard}>프로그햄 확인하기</S.ExpreienceBT>
                    </S.FrontProgramCard>
                    {/* 카드 뒷면 */}
                    <S.BackProgramCardWrap isClick={props.isClick}>
                        <div>
                            {
                                props.title === '포트폴리오 피드백'? portfolioMenu.map((item,index)=>(<S.MenuWrap onClick={props.showModal} key={index}>{item}</S.MenuWrap>)) :
                                resumeMenu.map((item,index)=>(<S.MenuWrap onClick={props.showModal} key={index}>{item}</S.MenuWrap>))
                            }
                        </div>
                        <S.BackIconWrap  onClick={props.onClickRotateCard}>
                            <S.BackIcon src='/backIcon.png'/> 뒤로
                        </S.BackIconWrap>
                    </S.BackProgramCardWrap>
                    <UseModal isModalOpen={props.isModalOpen} setIsModalOpen={props.setIsModalOpen} menuTitle={props.menuTitle}/>
                </S.CardWrap>
        </>
    )
}