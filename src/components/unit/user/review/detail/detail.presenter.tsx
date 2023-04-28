import StarRate from "../../../../commons/atom/user/starRate/starRate";
import * as S from './detail.style'
import Icon,{LikeOutlined,DislikeOutlined} from '@ant-design/icons';
import { ReviewDetailPresenter } from "./detail.type";
import Carousel from "../../../../commons/atom/user/carousel/carousel.container";

export default function ReviewDetaillUI(props:ReviewDetailPresenter){
    return(
        <S.Container>
        <S.H1>리뷰 디테일</S.H1>
        <S.H2>리뷰 사진 캐러셀</S.H2>
        <section>
            <Carousel file={props.data?.fileURL}/>
        </section>
        <S.H2>리뷰 상세</S.H2>
        <S.Section>
            <StarRate value={props.data?.starValue} />
            <div>{props.data?.program}</div>
            <div>{props.data?.overAll}</div>
            <div>{props.data?.reviewContents}</div>
        </S.Section>
        </S.Container>
    )
}