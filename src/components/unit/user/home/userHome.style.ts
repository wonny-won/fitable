import styled from "@emotion/styled";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    font-weight: 300;
    width: 100%;
`
export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    align-items: center;
`
export const ADText = styled.div`
    padding-bottom:20px;
`
export const AdText = styled.div`
    padding-bottom: 80px;
    font-size: 35px;
    letter-spacing: 3px;
    font-weight: semi-bold;
`
export const ADSpan = styled.span`
    font-family: 'LOTTERIACHAB';
    color: #8D60F5;
    font-size: 30px;
`
export const AdSpan = styled.span`
    color: #8D60F5;
    font-size: 25px;
    font-weight: bold;
`
export const CardsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 170px 130px 190px;
    width:100%;
    height: 750px;
    background-color: #FFE100;
    background-image: url('/frame.png');
    background-size: cover;
`
export const ProgramText = styled.div`
    display: flex;
    font-size : 40px;
    align-items: center;
    line-height: -20px;
    padding-bottom: 50px;
    transition: all 1s ease-in-out 0s;

`
export const ProgramTextSpan = styled.span`
    padding-bottom: 12px;
`
export const CardsWrapDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`
export const Img = styled.img`
    width: 450px;
    height: 300px;
    size: cover;
    text-align: center;
`
export const TutorContainer = styled(Section)`
    padding: 100px 0;
    background-color:#FCF9EF ;
`
export const TutorText = styled.div`
    font-size : 40px;
    padding-bottom: 40px;
`
export const TutorTextSpan = styled(ADSpan)`
    font-size: 40px;
`
export const TutorMascotImg = styled.img`
    width: 190px;
    height: 250px;
    position: absolute;
    right: 70px;
    bottom: -1200px;
`
export const BooksImg = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    right: 200px;
    bottom: -1200px;
`