import { CarouselPresenter } from './carousel.type';
import * as S from './carousel.style'
import { useRouter } from 'next/router';
import { v4 as uuidv4} from 'uuid'

export default function CarouselUI(props:CarouselPresenter){
    const tutor = ['/daram.png','/hoony.png','/ala.png']
    const router = useRouter()
      return (
        <S.SlickSlider {...props.settings}>
          {
           router.asPath ==='/' && tutor.map((item,index)=>(
                <S.tutorImg src={item} key={index}/>
            ))
          }
          {
            router.asPath === `/review/${router.query.reviewId}` && props.file &&
             props.file.length>0 ? props.file?.map((item)=>(
              <S.tutorImg src={`https://firebasestorage.googleapis.com/v0/b/fitable-6e5ac.appspot.com/o/newReview%2F${item}?alt=media`} key={uuidv4()} />
            )) : (<S.tutorImg src='/apply.png'/>)
          }
        </S.SlickSlider>
      );
}
