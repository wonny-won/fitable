import styled from "@emotion/styled"

export default function Advertisement (){
    return(
        <Container> 프로그램 신청시 5% 적립금을 드립니다. </Container>
    )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 47px;
    background-color: #1c1c1c;
    color: #FCF9EF;
    font-family: 'SUIT-Regular';
`