import { useEffect, useState } from 'react';
import * as S from './pagination.style'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
interface Param {
  currentPage: number;
  startPage: number;
  onClickPage: (event: any) => void;
  data: any;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
  lastPage: () => Promise<number>;
}

export default function Pagination(props:Param){
  const [lastPage,useLastPage] = useState(1)
  props.lastPage().then((res)=>(useLastPage(res)))
    return(
      <S.NumberWrap>
      <S.Bt onClick={props.onClickPrevPage}> <LeftOutlined /> </S.Bt>
      {
          new Array(lastPage>=5 ? 5 : lastPage).fill(1)?.map((_,index)=>{
              return(
              <S.PageBt
                  currentPage = {props.currentPage}
                  page ={props.startPage+index }
                  key={index + props.currentPage} 
                  onClick={props.onClickPage}> 
                  {`${ props.startPage+index }`}
              </S.PageBt>
          )})
      }
      <S.Bt onClick={props.onClickNextPage}> <RightOutlined /> </S.Bt>
      </S.NumberWrap>
    )
}