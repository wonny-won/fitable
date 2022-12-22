import { Rate } from 'antd';
import { useState } from 'react';
import * as S from './starRate.styled'

const desc = ['아주별로예요', '별로예요', '평범해요', '좋아요', '아주좋아요'];
export default function StarRate(){
    const [value, setValue] = useState(5);

    return (
        <span>
          <S.Star tooltips={desc} onChange={setValue} value={value} />
          {value ? <S.Text className="ant-rate-text">{desc[value - 1]}</S.Text> : ''}
        </span>
      );
}