import { useRoutingPageHooks } from '../../../../../commons/util/hooks/routing'
import * as S from './listCard.style'

interface PropsParams {
    data?: any[]
}

export default function ListCard(props:PropsParams){
    const routerHooks = useRoutingPageHooks()
    console.log(props)
    return(
        <>
        {
            props.data?.map((item)=>(
                <S.CardWrap key={item.id} id={item.id} onClick={routerHooks(`/review/${item.id}`)}>
                    {
                        item.data?.image ? (<S.Image>{item.data.image}</S.Image>):(<S.NoImg src="/fitable.png" />)
                    }
                    <S.OneSentenceExplain>{item.data?.OneSentenceExplain}</S.OneSentenceExplain>
                    <S.ProgramInfo>
                        {
                        item.data?.program==="Healing program" ? (<S.ProgramImage src="/healingprogram.svg"/>) : (<S.ProgramImage src="/dietprogram.svg"/>) 
                        }
                        <S.InfoMinWrap>
                            <div>{item.data?.program}</div>
                            <div>
                                <S.ReviewListStar value={item.data?.realvalue} />
                                <S.Span/>{ item.data?.realvalue}
                            </div>
                        </S.InfoMinWrap>
                    </S.ProgramInfo>
                </S.CardWrap>
            ))
        }
        </>
    )
}