import { ReviewModalPresenter } from "./reviewModal.type";
import StarRate from "../../../../commons/atom/user/starRate/starRate";
import * as S from './reviewModal.style'
import Icon,{LikeOutlined,DislikeOutlined} from '@ant-design/icons';
export default function ReviewModalDetailUI(props:ReviewModalPresenter){
    return(
        <S.Container>
            <S.Img>
                <h2 style={{display:"none"}}>리뷰 사진</h2>
                {
                    props.data?.image ? (<img src ={`https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/${props.data?.image}?alt=media`}/>) : (<img src='/fitable.png' sizes="cover"/>) 
                }
                 <div>{props.data?.image}</div>
            </S.Img>
            <S.ReviewContents>
                <h2 style={{display:"none"}}>진행 프로그램</h2>
                <S.SectionWrap>
                    <S.ProgromImg src={ props.data?.program === "Healing program" ? '/healingprogram.svg' : '/dietprogram.svg' } />
                    <S.TextWrap>
                        <div>[ f i t a b l e ] | {props.data?.program}</div>
                    </S.TextWrap>
                </S.SectionWrap>
                <S.Line />
                <h2 style={{display:"none"}}>리뷰 평점</h2>
                <StarRate value={props.data?.realvalue} />
                <h2 style={{display:"none"}}> 유저 정보</h2>
                <S.UserSection>
                    <S.User><span>user</span> 님의 리뷰입니다.</S.User>
                    <div>유저 기본 정보 엊저구</div>
                </S.UserSection>
                <h2 style={{display:"none"}}> 상세 리뷰</h2>
                <S.SectionWrap>
                    <div>{props.data?.realReview}</div>
                </S.SectionWrap>
                <h3 style={{display:"none"}}>리뷰 추천</h3>
                <S.SectionWrap>
                    <S.Button><LikeOutlined /> 도움돼요 <S.Count>0</S.Count></S.Button>
                    <S.Button><DislikeOutlined /> 도움안돼요 <S.Count>0</S.Count></S.Button>
                </S.SectionWrap>
            <S.Line />
        </S.ReviewContents>
        {/* 댓글 & 대댓글 */}
        </S.Container>
    )
}