import Footer from "./footer/footer.container";
import Header from "./header/header.container"
import Banner from "./banner/banner.presenter";
import { useRouter } from "next/router";
interface LayoutProps{
    children: JSX.Element;
}
import NavBar from "./navBar/nav.container";

export default function Layout(props:LayoutProps){
    const router = useRouter()
    const HIDDEN_BANNER = ['/review/new',`/review/${router.query.reviewId}/edit`,'/joinus','/signup']
    const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath)
    return(
        <div style={{display:"flex"}}>
            <NavBar/>
            <div style={{width: "100%",marginLeft:"10%"}}>
                {!isHiddenBanner && <Banner />}
                <div style={{marginTop:"130px"}} >{props.children}</div>
                <Footer />
            </div>
        </div>
    )
}