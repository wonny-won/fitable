import { useState } from 'react';
import * as S from './starRate.styled'

const desc = ['아주별로예요', '별로예요', '평범해요', '좋아요', '아주좋아요'];
export default function UseStarRate(){
    const [realvalue, setValue] = useState(5);
    return {
      starRateRender:(
        <span>
          <S.Star tooltips={desc} onChange={setValue} value={realvalue} />
          {realvalue ? <S.Text className="ant-rate-text">{desc[realvalue - 1]}</S.Text> : ''}
          {realvalue}
        </span>
      ),
      realvalue
    }
}