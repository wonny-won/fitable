import React from "react";
import Slider from "react-slick";

export default function Slick(){
    const settings = {
        dots: true, // 캐러셀의 점을 보여줄 것인지
        infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
        speed: 500, // 넘어가는 속도는 몇으로 할 것인지
        slidesToShow: 1, 
        slidesToScroll: 1
      };  
    return(
        <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>

    )
}
 
