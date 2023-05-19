import { useRoutingPageHooks } from '../../../../../commons/util/hooks/routing'
import StarRate from '../starRate/starRate'
import * as S from './listCard.style'

interface PropsParams {
    data?:  { pageArr: any[]; fetchDataCount: number; } | undefined;
    topReview?: any[];
    isEdit: boolean;
}  

export default function ListCard(props:PropsParams){
    const routerHooks = useRoutingPageHooks()
    return(
        <>
        {
            props.data?.pageArr?.map((item)=>(
                <S.CardWrap key={item.id} id={item.id} onClick={routerHooks(`/review/${item.id}`)}>
                    { item?.data?.fileName?.length>0 ? (<S.Image src={`https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/newReview%2F${item.data?.fileName?.[0]}?alt=media`}/>):(<S.NoImg src="/tutorMascot.png" />) }
                    <S.OneSentenceExplain>{item.data?.overAll}</S.OneSentenceExplain>
                    <S.ProgramInfo>
                    <S.UserProfileImg src={item.data?.writerProfile}/>
                        <S.InfoMinWrap>
                            <div>{item.data?.program}</div>
                                <StarRate value={item.data?.starValue} disable={true}/>
                        </S.InfoMinWrap>
                    </S.ProgramInfo>
                </S.CardWrap>
            ))
        }
        {   
            props.topReview?.map((item)=>( 
                <S.ThumbnailSection key={item.id} id={item.id} onClick={routerHooks(`/review/${item.id}`)}>
                    { item.fileName?.length>0 ? (<S.ThumbnailImg src={`https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/newReview%2F${item.fileName?.[0]}?alt=media`}/>):(<S.ThumbnailImg src="/tutorMascot.png" />) }
                    <S.ProgramReviewWrap>
                    <div>
                        <S.ProgramTilte>{item?.program}</S.ProgramTilte>
                        <S.OneSentenceExplain>{item?.overAll}</S.OneSentenceExplain>
                        <StarRate value={item?.starValue} disable={true}/>
                    </div>
                    <S.UserWrap>
                        <S.UserProfileImg src={item?.writerProfile}/>
                        <S.UserInfo>
                        <div>{item?.writer}</div>
                        </S.UserInfo>
                    </S.UserWrap>
                    </S.ProgramReviewWrap>
                </S.ThumbnailSection>
            ))
        }
        </>
    )
}