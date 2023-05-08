import * as S from './pagination.style'

interface Param {
  currentPage: number;
  startPage: number;
  onClickPage: (event: any) => void;
  data: any;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
}


export default function Pagination(props:Param){
    return(
      <S.NumberWrap>
      <div onClick={props.onClickPrevPage}> 이전 </div>
      {
          new Array(10).fill(1)?.map((_,index)=>{
              return(
              <div
                  key={index + props.currentPage} 
                  onClick={props.onClickPage}> 
                  {` ${ props.startPage+index } `}
              </div>
          )})
      }
      <div onClick={props.onClickNextPage}> 다음 </div>
      </S.NumberWrap>

    )
}