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
        color:#8d60f5;
        border: 1px solid #8d60f5;

    }
`
// export const ContentWrap = styled.div`
//     padding-top: 80px ;
// `
export const MenuWrap = styled.div`
    text-align:center;
    padding: 10px;
    border: 1px solid rgba(255,225,0,0.5);
    background-color:rgba(255,225,0,0.5);
    border-radius: 10px;
    margin-bottom: 15px;
    &:hover{
        cursor: pointer;
    }
`
export const BackIconWrap = styled.div`
    position: absolute;
    top: 360px;
    left: 60px;
    width: 40px;
    height: 15px;
    &:hover{
        cursor: pointer;
    }
`
export const BackIcon = styled.img`
    width: 30px;
    height: 5px;
`