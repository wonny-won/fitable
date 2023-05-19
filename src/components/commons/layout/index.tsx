import Footer from "./footer/footer.container";
import Banner from "./banner/banner.presenter";
import { useRouter } from "next/router";
import NavBar from "./navBar/nav.container";
import Advertisement from "./advertisement/advertisement";
interface LayoutProps{
    children: JSX.Element;
    isLogin:any;
}

export default function Layout(props:LayoutProps){
    const router = useRouter()
    const EXPOSE_BANNER = ['/review']
    const HIDDEN_ADVERTISE = ['/review','/mypage','/mypage/edit']
    const includesBanner = EXPOSE_BANNER.includes(router.asPath)
    const includesAdvertise = HIDDEN_ADVERTISE.includes(router.asPath)
    return(
            <div style={{display:"flex"}}>
                <NavBar isLogin={props.isLogin}/>
                <div style={{width: "100%"}} >
                    { !includesAdvertise && <Advertisement/> }
                    {includesBanner && <Banner />}
                    <div style={{marginTop:"100px"}} >{props.children}</div>
                    <Footer />
                </div>
            </div>
    )
}