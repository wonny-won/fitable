import MainCardUI from "./mainCard.presenter"
import { MainCardProps } from "./mainCard.types"

export default function MainCard(props:MainCardProps){
    return <MainCardUI image={props.image} />
}