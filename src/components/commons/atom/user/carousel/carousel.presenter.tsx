import { CarouselPresenter } from './carousel.type';
import * as S from './carousel.style'
import { useRouter } from 'next/router';

export default function CarouselUI(props:CarouselPresenter){
    const tutor = ['/daram.png','/hoony.jpeg','/ala.png']
    const router = useRouter()
      return (
        <S.SlickSlider {...props.settings}>
          {
            router.asPath==='/' && tutor.map((item)=>(
            <div>
                <S.tutorImg src={item}/>
            </div>
            ))
          }
        </S.SlickSlider>
      );
}
