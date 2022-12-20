import Footer from "./footer/footer.container";
import Header from "./header/header.container"
import Banner from "./banner/banner.presenter";
interface LayoutProps{
    children: JSX.Element;
}
export default function Layout(props:LayoutProps){
    return(
        <>
            <Header />
            <Banner />
             <div>{props.children}</div>
            <Footer />
        </>
    )
}