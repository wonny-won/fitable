import UserMainUI from "./userHome.presenter"

export default function UserMain(props){
    console.log("컴포넌트",props)
    return <UserMainUI image={props.image}/>
}