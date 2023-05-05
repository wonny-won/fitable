import { useRouter } from 'next/router';
import * as S from './starRate.styled'
import { Dispatch, SetStateAction } from 'react';

interface ReviewProps {
  value? : number;
  disable?: boolean;
  setValue?: Dispatch<SetStateAction<number>>;
}

const desc = ['아주별로예요', '별로예요', '평범해요', '좋아요', '아주좋아요'];
export default function StarRate(props:ReviewProps){
  const router = useRouter()
  const path = router.asPath
  return(
    <>
      <S.Star tooltips={desc} onChange={props.setValue} value={props.value} disabled={props.disable} path={path}/>
      {props.value && router.asPath!=='/review' ? <S.Text className="ant-rate-text">{desc[props.value - 1]}</S.Text> : ''}
    </>
  )
}
