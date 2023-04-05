import CarouselUI from "./carousel.presenter"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: true,
        // prevArrow: true
      };
    return <CarouselUI settings={settings}/>
}
