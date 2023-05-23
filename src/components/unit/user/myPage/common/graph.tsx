import { time } from '../../../../../commons/util/functions/time';
import { useRoutingPageHooks } from '../../../../../commons/util/hooks/routing';
import * as S from '../myPage.style'
import { deleteReview } from '../mypageFn/deleteReview';

interface Params {
    data?: any;
    onClickOpenModal?:any;
    propsWithRouter?:any;
    isReview:boolean;
}

export default function Graph(props:Params){
    const routerHooks = useRoutingPageHooks()
    const deleteOneReview = deleteReview()
    return(
        <>
            <S.Header> 
                <div>{props.isReview ? '프로그램':'신청날짜'}</div>
                <div>{props.isReview ? '제목':'프로그램'}</div>
                <div>{props.isReview ? '보기 / 삭제 / 수정':'신청내역 / 리뷰작성'}</div>
            </S.Header>
            {
                props.data?.length > 0 ? props.data?.map((item:any)=>{
                    console.log(item)
                    const createTime = time(item?.createAt?.seconds)
                    return(
                        <div key={item.id}>
                        <S.Content>
                        <div>{props.isReview? item?.program : createTime}</div>
                        <S.ItemWrap isReview={props.isReview}>{props.isReview? item?.overAll : item.program}</S.ItemWrap>
                        <S.BtWrap>
                            { props.isReview && <S.ReviewViewBT onClick={routerHooks(`/review/${item.id}`)}> 보기 </S.ReviewViewBT> }
                            <S.ViewBt id={item.id} onClick={props.isReview ? deleteOneReview(item.id) : props.onClickOpenModal}>{props.isReview ? '삭제':'보기'}</S.ViewBt> 
                            <S.ReiewBt src='/reviewPencil.svg' id={item.program} onClick={props.isReview? routerHooks(`/review/${item.id}/edit/`) : props.propsWithRouter}/>
                        </S.BtWrap>
                        </S.Content>
                        </div>
                    )}) : (
                        <S.Content>
                        <div> - </div>
                        <div> {props.isReview ? '작성하신 리뷰가 없습니다.':'신청 내역이 없습니다.'} </div>
                        <S.ViewBt>-</S.ViewBt>
                        </S.Content>
                    )
            }
        </>
    )
}