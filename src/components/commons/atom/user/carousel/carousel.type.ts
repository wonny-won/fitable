export interface CarouselPresenter{
    settings: {
        dots: boolean;
        infinite: boolean;
        speed: number;
        slidesToShow: number;
        slidesToScroll: number;
    };
    file: string[] | undefined;
}

export interface CarouselContainer{
    file?: string;
}