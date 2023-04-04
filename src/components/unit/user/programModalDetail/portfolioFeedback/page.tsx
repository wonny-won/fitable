import styled from "@emotion/styled"

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    font-size: 40px;
`
const Image = styled.img`
    width: 840px;
`
export default function PageFeedback(){
    return(
        <Container>
            <Title>페이지 별 피드백?</Title>
            <Image src='/pagefeedback1.png'/>
            <Image src='/pageffedback2.png'/>
        </Container>
    )
}