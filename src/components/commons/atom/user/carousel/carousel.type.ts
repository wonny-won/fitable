export interface CarouselPresenter{
    settings: {
        dots: boolean;
        infinite: boolean;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
    };
    file?: any;
}

export interface CarouselContainer{
    file?: any;
}