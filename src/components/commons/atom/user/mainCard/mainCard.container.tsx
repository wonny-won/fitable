import MainCardUI from "./mainCard.presenter"
import { MainCardProps } from "./mainCard.types"
import { onClickPayment } from "../../../../../commons/util/function"

export default function MainCard(props:MainCardProps){
   
    return <MainCardUI image={props.image} 
                       onClickPayment={onClickPayment}/>
}