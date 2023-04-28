import StarRate from "../../../../commons/atom/user/starRate/starRate";
import * as S from './detail.style'
import Icon,{LikeOutlined,DislikeOutlined} from '@ant-design/icons';
import { ReviewDetailPresenter } from "./detail.type";

export default function ReviewDetaillUI(props:ReviewDetailPresenter){
    return(
        <>
        <h1>리뷰 디테일</h1>
        <section>
            <div>{props.data?.program}</div>
            <div>{props.data?.overAll}</div>
            <div>{props.data?.fileURL}</div>
            <div>{props.data?.reviewContents}</div>
            <div>{props.data?.starValue}</div>
        </section>
        </>
    )
}