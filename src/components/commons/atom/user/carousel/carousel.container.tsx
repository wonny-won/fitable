import CarouselUI from "./carousel.presenter"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselContainer } from "./carousel.type";

export default function Carousel(props:CarouselContainer){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
      };
      console.log(props)
    const file: string[]|undefined = new Array(props.file)   
    return <CarouselUI settings={settings}
                       file={file}/>
}
