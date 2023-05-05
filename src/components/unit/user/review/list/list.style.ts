import styled from "@emotion/styled";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TopReview = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 40px 0;
    background-image: url('/frame.png');
    background-size: cover;
    background-color: #ffe100;
`
export const TopReviewTitle = styled.div`
    font-size: 45px;
    padding: 30px 0;
`
export const TopReviewWrap = styled.div`
    display: flex;
    padding: 0 0 40px 0;
    justify-content: space-around;
`
export const RankingImg = styled.img`
    width: 620px;
    height: 200px;
    size: cover;
`
export const RviewWrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: scroll;
    background-color: #FCF9EF;
    padding: 40px 5%;
`
