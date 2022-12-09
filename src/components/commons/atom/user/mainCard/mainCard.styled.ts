import styled from "@emotion/styled"

interface ImageProps{
    image? : string ;
}
export const CardWrap = styled.section`
    align-items: center;
    perspective: 1500px;
    width: 400px;
    height: 450px;
    transform-style: preserve-3d;
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
    transition: .8s;
    position: absolute;
    transform: rotateY(0deg);
    backface-visibility: hidden;
    &:focus-within{
        cursor: pointer;
        transform: rotateY(180deg);
    }
    box-shadow: 2px 6px 7px rgba(0,0,0,0.25);
`
export const BackProgramCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
    border-radius: 30px;
    transition: .8s;
    backface-visibility: hidden;
    border: 1px solid black;
    transform: rotateY(0deg);
    &:focus-within{
        cursor: pointer;
        transform: rotateY(180deg);
    }
`
export const CardTitle = styled.div`
    font-size: 36px;
    font-weight: 400;
    color: #fff;
`
export const ExpreienceBT = styled.button`
    width: 70px;
    height: 35px;
    color : #fff;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 4px;
    margin : 12px auto;
    font-weight: 300;
`