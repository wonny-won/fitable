import * as S from './starRate.styled'
import { Dispatch, SetStateAction } from 'react';

interface ReviewProps {
  value? : number;
  disable?: boolean;
  setValue?: Dispatch<SetStateAction<number>>;
}

const desc = ['아주별로예요', '별로예요', '평범해요', '좋아요', '아주좋아요'];
export default function StarRate(props:ReviewProps){
  return(
    <span>
      <S.Star tooltips={desc} onChange={props.setValue} value={props.value} disabled={props.disable}/>
      {props.value ? <S.Text className="ant-rate-text">{desc[props.value - 1]}</S.Text> : ''}
    </span>
  )
}
