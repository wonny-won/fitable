import Footer from "./footer/footer.container";
import Banner from "./banner/banner.presenter";
import { useRouter } from "next/router";
import NavBar from "./navBar/nav.container";
import Advertisement from "./advertisement/advertisement";
import UseModal from "../atom/user/modal/modal.container";
import { useModalOpen } from "./navBar/navBarFn/modalOpen";
interface LayoutProps{
    children: JSX.Element;
    isLogin:any;
}

export default function Layout(props:LayoutProps){
    const router = useRouter()
    const EXPOSE_BANNER = ['/review/']
    const HIDDEN_ADVERTISE = ['/review/','/mypage/','/mypage/edit/']
    const includesBanner = EXPOSE_BANNER.includes(router.asPath)
    const includesAdvertise = HIDDEN_ADVERTISE.includes(router.asPath)
    const {isModalOpen,isNav,setIsModalOpen,onClickBt} = useModalOpen()
    return(
            <div style={{display:"flex"}}>
                <NavBar isLogin={props.isLogin} onClickBt={onClickBt}/>
                <div style={{width: "100%"}} >
                    { !includesAdvertise && <Advertisement/> }
                    {includesBanner && <Banner />}
                    <div style={{marginTop:"100px"}} >
                        {props.children}
                        {/* <UseModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isNav={isNav}/> */}
                    </div>
                    <Footer />
                </div>
            </div>
    )
}