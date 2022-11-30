import MainCardUI from "./mainCard.presenter"

export default function MainCard(props){
    console.log("card", props)
    return <MainCardUI image={props.Image} />
}