import styled from "@emotion/styled";
import Slider from "react-slick";

interface SlickSliderProps {
    currentPage: string;
}

export const SlickSlider= styled(Slider)`
    width: 700px;
`
export const tutorImg = styled.img`
    width : 700px;
    height: 400px;
    &:hover{
        cursor: pointer;
    }
`