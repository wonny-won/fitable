import Footer from "./footer/footer.container";
import Header from "./header/header.container"

interface LayoutProps{
    children: JSX.Element;
}
export default function Layout(props:LayoutProps){
    return(
        <>
            <Header />
            <div>{props.children}</div>
            <Footer />
        </>
    )
}