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
`
export default function PageFeedback(){
    return(
        <Container>
            <Title><TitleSpan>페이지 단위 피드백</TitleSpan> 이란?</Title>
            <Image src='/pagefeedback1.png'/>
            <Image src='/pagefeedback2.png'/>
            <Image src='/pagefeedback3.png'/>
        </Container>
    )
}