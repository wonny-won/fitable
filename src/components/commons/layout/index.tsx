import Footer from "./footer/footer.container";
import Banner from "./banner/banner.presenter";
import { useRouter } from "next/router";
interface LayoutProps{
    children: JSX.Element;
    isLogin: boolean;
}
import NavBar from "./navBar/nav.container";

export default function Layout(props:LayoutProps){
    const router = useRouter()
    const HIDDEN_BANNER = ['/review/new',`/review/${router.query.reviewId}/edit`,'/joinus','/signup','/about','/mypage','/mypage/edit']
    const Z_INDEX = ['/joinus','/mypage/edit']
    const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath)
    const zindex = Z_INDEX.includes(router.asPath)
    return(
        <div style={{display:"flex"}}>
            <NavBar isLogin={props.isLogin}/>
            <div style={{width: "100%",marginLeft:"10%",zIndex:`${zindex && "1"}`}} >
                {!isHiddenBanner && <Banner />}
                <div style={{marginTop:"130px"}} >{props.children}</div>
                <Footer />
            </div>
        </div>
    )
}