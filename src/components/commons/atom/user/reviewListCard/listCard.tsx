import { getImgName } from '../../../../../commons/util/functions/imageName'
import { useRoutingPageHooks } from '../../../../../commons/util/hooks/routing'
import StarRate from '../starRate/starRate'
import * as S from './listCard.style'
import {v4 as uuidv4} from 'uuid'

interface PropsParams {
    data?: any[];
    topReview?: any[];
    isEdit: boolean;
}   

export default function ListCard(props:PropsParams){
    const routerHooks = useRoutingPageHooks()
    return(
        <>
        {
            props.data?.map((item)=>(
                <S.CardWrap key={item.id} id={item.id} onClick={routerHooks(`/review/${item.id}`)}>
                    {
                        item.data?.fileURL!=='등록된 파일이 없습니다.' ? (<S.Image src={`https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/newReview%2F${item.data?.fileName}?alt=media`}/>):(<S.NoImg src="/tutorMascot.png" />)
                    }
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
                        {
                            item?.fileURL!=='등록된 파일이 없습니다.' ? (<S.ThumbnailImg src={`https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/newReview%2F${item?.fileName}?alt=media`}/>):(<S.ThumbnailImg src="/tutorMascot.png" />)
                        }
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