import styled from "@emotion/styled"

interface ImageProps{
    image : string ;
}

export const CardWrap = styled.div`
    align-items: center;
    width: 400px;
    height: 450px;
`
export const ProgramCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
    background-image: url(${(props:ImageProps) => props.image});
    background-size: cover;
    border-radius: 30px;
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