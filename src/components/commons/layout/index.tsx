import Header from "./header/header.container"

interface LayoutProps{
    children: JSX.Element;
}
export default function Layout(props:LayoutProps){
    return(
        <>
            <Header />
            {/* <div></div> */}
            <div>{props.children}</div>
        </>
    )
}