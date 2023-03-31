import styled from "@emotion/styled"

interface TransformProps{
    isClick: boolean;
}

export const CardWrap = styled.section`
    perspective: 1500px;
    transform-style: preserve-3d;
`
export const ExplainTitle = styled.div`
    font-size: 20px;
`
export const FrontProgramCard = styled.div`
    perspective: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 440px;
    background-color: #FCF9EF;
    border-radius: 30px;
    transition: .8s;
    position: absolute;
    transform: ${(props:TransformProps)=>(props.isClick ? 'rotateY(180deg)':'rotateY(0deg)')};
    backface-visibility: hidden;
    z-index: 10;
    box-shadow: 2px 6px 7px rgba(0,0,0,0.25);
`
export const BackProgramCardWrap = styled.div`
    perspective: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 440px;
    background-color: #fff;
    border-radius: 30px;
    transition: .8s;
    transform: ${(props:TransformProps)=>(props.isClick ? 'rotateY(0deg)':'rotateY(-180deg)')};
    backface-visibility: hidden;
    box-shadow: 2px 6px 7px rgba(0,0,0,0.25);
`
export const BackCardInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;

`
export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    font-size: 15px;
    font-weight: 300;
`
export const Text = styled.div`
    padding-bottom: 15px;
`
export const TextSpan = styled.span`
    font-size: 20px;
    font-weight: 400;
    color: #8D60F5;
`
export const CardTitle = styled.div`
    font-size: 36px;
    font-weight: 400;
    color: black;
    margin-top: 25px;
`
export const ExpreienceBT = styled.button`
    padding: 7px 9px;
    color : black;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 4px;
    margin : 20px auto;
    font-size: 15px;
    font-weight: 300;
    &:hover{
        cursor: pointer;
    }
`
