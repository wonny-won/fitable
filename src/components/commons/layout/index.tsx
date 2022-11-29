import Header from "./header/header.container"

interface LayoutProps{
    children: JSX.Element;
}
export default function Layout(props:LayoutProps){
    return(
        <>
            <Header />
            <div style={{ width : "70%" }}>{props.children}</div>
        </>
    )
}