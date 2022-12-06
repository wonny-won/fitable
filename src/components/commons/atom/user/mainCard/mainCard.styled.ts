import styled from "@emotion/styled"

interface ImageProps{
    image? : string ;
}

export const Container = styled.div`
    width: 400px;
    height: 450px;
    transform-style: preserve-3d;
`
export const CardWrap = styled.section`
    align-items: center;
    perspective: 1800px;
    width: 400px;
    height: 450px;
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
    transition: 1s;
    transform: rotateY(0deg);
    backface-visibility: hidden;
    &:hover{
        cursor: pointer;
        transform: rotateY(180deg);
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
    border-radius: 30px;
    backface-visibility: hidden;
    transition: 1s;
    &:hover{
        cursor: pointer;
        transform: rotateY(180deg);
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