import styled from "@emotion/styled"

interface ImageProps{
    image? : string ;
}

export const CardWrap = styled.div`
    align-items: center;
    width: 400px;
    height: 450px;
    /* 부모의 자식요소가 3차원의 애니메이션 효과를 가질때 300px의 거리에서 보는 원근감을 줌 */
    perspective: 300px; 
`
export const FrontProgramCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
    background-image: url(${(props:ImageProps) => props.image});
    background-size: cover;
    border-radius: 30px;
    position: absolute;
    transition: ls;
    &:hover{
        width: 410px;
        height:460px;
        cursor: pointer;
    }
    box-shadow: 2px 6px 7px rgba(0,0,0,0.25);
`
export const BackProgramCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
    background-image: url(${(props:ImageProps) => props.image});
    background-size: cover;
    border-radius: 30px;
    backface-visibility: hidden;
    transition: ls;
    &:hover{
        width: 410px;
        height:460px;
        cursor: pointer;
    }
    box-shadow: 2px 6px 7px rgba(0,0,0,0.25);
`

export const CardTitle = styled.div`
    font-size: 36px;
    font-weight: 400;
    color: #fff;
`
export const Line = styled.hr`
    width: 70px;
    margin: 10px;
    background: rgba(255,255,255,0.5);
    height: 1px;
    border: 0;

`