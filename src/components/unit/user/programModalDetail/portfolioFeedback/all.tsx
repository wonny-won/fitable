import styled from "@emotion/styled"

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    font-size: 40px;
`
const TitleSpan = styled.span`
color:#8d60f5;
`
const Image = styled.img`
    width: 840px;
    height: 500px;
`

export default function AllFeedback(){
    return(
        <>
         <Container>
            <Title><TitleSpan>전체간이 피드백</TitleSpan> 이란?</Title>
            <Image src='/allFeedback1.png'/>
            <Image src='/allFeedback2.png'/>
            <Image src='/allFeedback3.png'/>
        </Container>
        </>
    )
}