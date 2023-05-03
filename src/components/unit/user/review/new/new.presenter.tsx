import Head from "next/head";
import * as S from './new.style'
import { NewReview } from "./new.types";
import StarRate from "../../../../commons/atom/user/starRate/starRate";
import { onChangeInput } from "./reviewNewFn/onChange";

export default function NewReviewUI(props:NewReview){
    const { register,handleSubmit,handleChange } = onChangeInput()
    return(
        <>
        <Head>
            <title>fitable | 온라인 프로그램 리뷰</title>
            <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <form onSubmit={props.isEdit? handleSubmit(props.onClcickUpdateReview) : handleSubmit(props.onClcickSubmitReview)}>
        <h1 style={{display:'none'}}> 리뷰 등록페이지 </h1>
        <S.Container>
            <S.LeftWrap>
                <S.H2>썸네일 미리보기</S.H2>
                <S.ThumbnailSection>
                    {
                        props.isEdit ? <S.ThumbnailImg src={props.data?.fileURL!=='등록된 파일이 없습니다.' ? `https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/newReview%2F${props.fileName}?alt=media`:'/tutorMascot.png'}/>
                        : <S.ThumbnailImg src={props.imgURL!==''? props.imgURL:'/tutorMascot.png'}/>
                    }
                    <S.ProgramReviewWrap>
                    <div>
                        <S.ProgramTilte>{props.isEdit? props.data?.program : props.program}</S.ProgramTilte>
                        <StarRate value={props.isEdit? props.data?.starValue :props.realvalue} disable={true}/>
                    </div>
                    <S.UserWrap>
                        <S.UserProfileImg src={props.isEdit? props.data?.writerProfile : props.userInfo?.photoUrl}/>
                        <S.UserInfo>
                        <div>{props.isEdit? props.data?.writer : props.userInfo?.displayName}</div>
                        <div>{props.userInfo?.email}</div>
                        </S.UserInfo>
                    </S.UserWrap>
                    </S.ProgramReviewWrap>
                </S.ThumbnailSection>
                <S.ExtendsH2>이미지 등록</S.ExtendsH2>
                <section>
                    <S.ImgWrap>
                    <S.UploadBt htmlFor="fileTag">+</S.UploadBt>
                    <input type='file' id='fileTag' hidden onChange={props.onChangeFile}/>
                    { props.imgURL!==''&& <S.UploadingImg src={props.imgURL}/> }
                    { props.isEdit && <S.UploadingImg src={`https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/newReview%2F${props.fileName}?alt=media`}/> }
                    </S.ImgWrap>
                </section>
                <S.ExtendsH2>프로그램 총평</S.ExtendsH2>
                <section>
                    { !props.isEdit && <StarRate setValue={props.setValue} value={props.realvalue}/> }
                    <S.OverallInput type='text' {...register('overAll')} defaultValue={props.isEdit ? props.data?.overAll : ''}/>
                </section>
            </S.LeftWrap>
            <S.RigthWrap>
                <S.ContentsWrap>
                <S.H2>자세한 리뷰는 여기에 적어주세요.</S.H2>
                <section>
                    <S.CustomReactQuill onChange={handleChange} value={props.isEdit? props.data?.reviewContents : ''}/>
                </section>
                </S.ContentsWrap>
                <S.BtWrap>
                    <S.Botton>{props.isEdit? '수정하기':'등록하기'}</S.Botton>
                    <S.Botton>취소하기</S.Botton>
                </S.BtWrap>
            </S.RigthWrap>
        </S.Container>
        </form>
        </>
    )
}