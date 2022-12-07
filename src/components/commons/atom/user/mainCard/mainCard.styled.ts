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
    perspective: 1500px;
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
    transition: .8s;
    transform: rotateY(0deg);
    backface-visibility: hidden;
    &:hover{
        cursor: pointer;
        transform: rotateY(180deg);
    }
    box-shadow: 2px 6px 7px rgba(0,0,0,0.25);
`
export const BackProgramCard = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
    border-radius: 30px;
    transition: .8s;
    backface-visibility: hidden;
    transform: rotateY(0deg);
    &:hover{
        cursor: pointer;
        transform: rotateY(-180deg);
    }
`

export const CardTitle = styled.div`
    font-size: 36px;
    font-weight: 400;
    color: #fff;
`
export const ExpreienceBT = styled.button`
    width: 70px;
    height: 30px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 4px;
`