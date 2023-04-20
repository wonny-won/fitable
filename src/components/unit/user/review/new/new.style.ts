import styled from "@emotion/styled";
import StarRate from "../../../../commons/atom/user/starRate/starRate";
//  import ReactQuill from 'react-quill';
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(()=>import('react-quill'),{ssr:false})

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    padding: 0 100px;
`
export const LeftWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`
export const RigthWrap =  styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    align-items: center;
`
export const H2 = styled.h2`
    font-size: 15px;
`
export const ExtendsH2 = styled(H2)`
    margin-top: 80px;
`
export const ThumbnailSection = styled.section`
    display: flex;
    width: 400px;
    border: 3px solid #FFE100;
    border-radius: 15px;
    padding: 30px;
    background-color: #FCF9EF;
`
export const Section = styled.section`
    margin-top: 30px;
`
export const ThumbnailImg = styled.img`
    width: 120px;
    height: 200px;
`
export const ProgramReviewWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    align-items: center;
    text-align: center;
`
export const ReviewStar = styled(StarRate)`
span{
    text-align: center;
}
`
export const UploadBt = styled.label`
    padding: 30px 35px;
    border: 4px dotted #ddd;
    border-radius: 8px;
    font-size: 25px;
    color:#ddd;
    &:hover{
        cursor: pointer;
    }
`
export const OverallInput = styled.input`
    width: 90%;
    border: none;
    border: 2.5px solid #ddd;
    border-radius: 10px;
    padding: 5px;
    outline: none;
    margin-top: 10px;
`
export const ContentsWrap = styled.div`
    width: 100%;
`
export const BtWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 60px;
`
export const Botton = styled.button`
    text-align: center;
    width: 48%;
    padding: 10px 45px;
    background-color: #1c1c1c;
    color: #fff;
    border: 1px solid #1c1c1c;
    &:hover{
        background-color: #fff;
        color:#1c1c1c;
        cursor: pointer;
    }
`
export const CustomReactQuill = styled(ReactQuill)`
    width: 100%;
    height: 500px;
    font-family: 'SUIT-Regular';
` 